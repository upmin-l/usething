import {packages} from "../ds/packages"
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import type {RollupOptions,OutputOptions} from 'rollup'

// import {resolve} from "path";
// import fg from 'fast-glob'
// import {functions} from '../dataSource/dataSource'

const esbuildPlugin = esbuild()
const configs:RollupOptions[] = []
const functionNames = ['index']
// 静态
const externals = [
    'vue',
]
for (const {name,target} of packages){
    for (const fn of functionNames){
        const input =`packages/${name}/${fn}/index.ts`;
        // const info = functions.find(i => i.name === fn)
        const output: OutputOptions[] = []
        output.push({
            file: `packages/${name}/dist/${fn}.mjs`,
            format: 'es',
        })
        configs.push({
            input,
            output,
            plugins: [
                target
                    ? esbuild({ target })
                    : esbuildPlugin,
                json(),
            ],
            external:[
                ...externals
            ]
        })
    }
}
console.log(configs);
export default configs
