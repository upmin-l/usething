import _dataSource,{categories as _categories,functions as _functions,packages as _packages} from './index.json'
import type {PackageIndexes} from "./types";

export const dataSource =_dataSource as PackageIndexes
export const functions = _functions as PackageIndexes['functions']
export const packages = _packages as PackageIndexes['packages']
export const categories = _categories as PackageIndexes['categories']
export const coreCategoryNames = Array.from(categories).filter(f => !f.startsWith('@'))
export const functionNames = functions.map(f => f.name)
export const getFunction = (name: string) => dataSource.functions.find(f => f.name === name)
