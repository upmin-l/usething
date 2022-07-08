import fg from 'fast-glob'
import {packages} from "../ds/packages";
import {join, resolve} from "path";
import fs from 'fs-extra'

const DIR_ROOT = resolve(__dirname, '../')
const DIR_SRC = resolve(DIR_ROOT, 'packages')

async function copyMarkdown() {
    for (const key of packages) {
        const dir = join(DIR_SRC, key.name)
        const data: any[] = []
        const files1 = await fg('*', {
            onlyDirectories: true,
            cwd: dir,
            ignore: [
                '_*',
                'dist',
                'node_modules',
            ],
        })
        const files2 = await fg('**/*.md', {
            onlyDirectories: false,
            cwd: dir,
            ignore: [
                '_*',
                'dist',
                'node_modules',
            ],
            absolute: true,
            markDirectories: true,
        })
        files1.forEach((v, index) => {
            data.push({
                name: v,
                path: files2[index]
            })
        })
        data.map((v) => {
            fs.copyFileSync(v.path, `${DIR_SRC}/doc-${key.name}/${v.name}.md`)
        })
    }

}

copyMarkdown().then(() => {

})
