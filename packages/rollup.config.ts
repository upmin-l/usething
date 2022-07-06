import {packages} from "../ds/packages"
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import type {RollupOptions, OutputOptions} from 'rollup'

// import {resolve} from "path";
// import fg from 'fast-glob'
// import {functions} from '../dataSource/dataSource'

const esbuildPlugin = esbuild()
const configs: RollupOptions[] = []
const functionNames = ['index']
// 静态
const externals = [
    'vue',
]
for (const {name, target,cjs,mjs} of packages) {
    for (const fn of functionNames) {
        const input = `packages/${name}/index.ts`
        // const info = functions.find(i => i.name === fn)
        const output: OutputOptions[] = []
        if (mjs!==false)output.push({file: `packages/${name}/dist/${fn}.mjs`, format: 'es'})
        if (cjs!==false)output.push({file: `packages/${name}/dist/${fn}.cjs`, format: 'cjs'})
        configs.push({
            input,
            output,
            plugins: [
                target
                    ? esbuild({target})
                    : esbuildPlugin,
                json(),
            ],
            external: [
                ...externals
            ]
        })
    }
}
export default configs
