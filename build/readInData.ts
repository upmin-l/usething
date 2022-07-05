import fg from 'fast-glob'
import {packages} from "./packages";
import {join, relative, resolve} from "path";
// @ts-ignore
import fs from 'fs-extra'
import matter from 'gray-matter'
import chalk from 'chalk'
export const DIR_ROOT = resolve(__dirname, '../')
export const DIR_SRC = resolve(DIR_ROOT, 'packages')
const DOCS_URL = 'http://localhost:3000'

export default async function listPackages(dir: string) {
    const files = await fg('*', {
        onlyDirectories: true,
        cwd: dir,
        ignore: [
            '_*',
            'dist',
            'node_modules',
        ]
    })
    files.sort()
    return files
}

export async function readCoreData() {
    const coreCon = {
        packages: {},
        categories: {},
        functions: []
    }
    for (const key of packages) {
        const dir = join(DIR_SRC, key.name)
        const functions = await listPackages(dir)
        const pkg = {
            ...key,
            dir: (relative(DIR_ROOT, dir).replace(/\\/g, '/')),
            docs: `${DOCS_URL}/${key.name}/README.html`
        }
        coreCon.packages[key.name] = pkg
        // 处理 每个hooks
        await Promise.all(functions.map(async (item) => {
            const mdPath = join(dir, item, 'index.md')
            // const tsPath = join(dir, item, 'index.ts')
            const fn: VueTfn = {
                name: item,
                package: pkg.name
            }
            fn.docs = `${DOCS_URL}/${pkg.name}/${item}/`
            const mdRaw = await fs.readFile(mdPath, 'utf-8')
            // content 内容 data 类型
            const {content: data, data: category} = matter(mdRaw)
            // 获取描述
            let description = (
                data.replace(/\r\n/g, '\n')
                    .match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || ''
            description = description.trim()
            description = description.charAt(0).toLowerCase() + description.slice(1)
            // fn.category = ['core', 'shared'].includes(pkg.name) ? category : `@${pkg.display}`
            fn.category = pkg.display
            fn.description = description
            coreCon.functions.push(fn)
        }))
    }
    return coreCon
}

async function run() {
    const res = await readCoreData()
    await fs.writeJSON(join(resolve(__dirname,'../packages/'), 'index.json'), res, { spaces: 2 })
}

run().then(() => {
    console.log(chalk.green(`================================================`))
    console.log(chalk.green(`                已生成数据源                      `))
    console.log(chalk.green(`           (generated data source)`              ))
    console.log(chalk.green(`================================================`))
})
