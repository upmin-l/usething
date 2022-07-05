import type {RollupOptions} from 'rollup'
import {packages} from "../ds/packages"
// import {resolve} from "path";
// import fg from 'fast-glob'

const config:RollupOptions[] = []
const functionNames = ['index']
for (const {name} of packages){
    for (const fn of functionNames){
        console.log(fn);
    }
}

export default config
