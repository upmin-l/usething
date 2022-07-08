import {packages} from "../ds/packages"
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import type {RollupOptions, OutputOptions} from 'rollup'
const dtsPlugin = [dts()]
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
for (const {name, target,cjs,mjs,dts,external,iife,} of packages) {
    for (const fn of functionNames) {
        const input = `packages/${name}/index.ts`
        // const info = functions.find(i => i.name === fn)
        const output: OutputOptions[] = []
        if (mjs!==false)output.push({file: `packages/${name}/dist/${fn}.mjs`, format: 'es'})
        if (cjs!==false)output.push({file: `packages/${name}/dist/${fn}.cjs`, format: 'cjs'})
        if (iife !== false) {
            output.push(
                {
                    file: `packages/${name}/dist/${fn}.iife.js`,
                    format: 'iife',
                    name: 'VueThing',
                    extend: true,
                    globals: {'vue':'vue'},
                },
                {
                    file: `packages/${name}/dist/${fn}.iife.min.js`,
                    format: 'iife',
                    name: 'VueThing',
                    extend: true,
                    globals: {'vue':'vue'},
                },
            )
        }
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
                ...externals,
                ...(external || [])
            ]
        })
        if (dts !== false) {
            configs.push({
                input,
                output: {
                    file: `packages/${name}/dist/${fn}.d.ts`,
                    format: 'es',
                },
                plugins: dtsPlugin,
                external: [
                    ...externals,
                    ...(external || []),
                ],
            })
        }
    }
}
export default configs
