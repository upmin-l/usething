import fg from 'fast-glob'
import {packages} from "../ds/packages";
import {join, relative, resolve} from "path";
import fs from 'fs-extra'
import matter from 'gray-matter'
import chalk from 'chalk'

export const DIR_ROOT = resolve(__dirname, '../')
export const DIR_SRC = resolve(DIR_ROOT, 'packages')
const DOCS_URL = 'http://localhost:3000'
import {PackageIndexes, VueTfn, VueTPackage} from "./types";

async function listPackages(dir: string) {
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
    const coreCon: PackageIndexes = {
        packages: {},
        categories: [],
        functions: []
    }
    for (const key of packages) {
        const dir = join(DIR_SRC, key.name)
        const functions = await listPackages(dir)
        const pkg: VueTPackage = {
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
                package: pkg.name,
                docs:`${DOCS_URL}/${pkg.name}/${item}/`
            }
            const mdRaw = await fs.readFile(mdPath, 'utf-8')
            // content 内容 data 类型
            const {content: data, data: frontMatter} = matter(mdRaw)
            const category = frontMatter.category
            // 获取描述
            let description = (
                data.replace(/\r\n/g, '\n')
                    .match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || ''
            description = description.trim()
            description = description.charAt(0).toLowerCase() + description.slice(1)
            let related = frontMatter.related
            if (related && related === 'string') {
                related = related.split(',').map((v: string) => v.trim()).filter(Boolean)
                if (related.length)fn.related = related
            }
            fn.category = ['core'].includes(pkg.name) ? category : `@${pkg.display}`
            // fn.category = pkg.category
            fn.description = description
            coreCon.functions.push(fn)
        }))
        coreCon.categories =getCategories(coreCon.functions)
    }
    return coreCon
}

function getCategories(functions:VueTfn[]){
    return uniq(
        functions
            .map(i => i.category)
            .filter(Boolean),
    ).sort(
        (a, b) => (a.startsWith('@') && !b.startsWith('@'))
            ? 1
            : (b.startsWith('@') && !a.startsWith('@'))
                ? -1
                : a.localeCompare(b),
    )
}
export function uniq<T extends any[]>(a: T) {
    return Array.from(new Set(a))
}
async function run() {
    const res = await readCoreData()
    await fs.writeJSON(join(resolve(__dirname, './'), 'index.json'), res, {spaces: 2})
}

run().then(() => {
    console.log(chalk.green(`================================================`))
    console.log(chalk.green(`                已生成数据源                      `))
    console.log(chalk.green(`           (generated data source)`))
    console.log(chalk.green(`================================================`))
})
