import {categories, coreCategoryNames, dataSource} from '../../dataSource/dataSource'

const data = Array.from(categories)
export const coreCategory = coreCategoryNames.map(v => ({
    text: v,
    link: `/doc-${v.toLocaleLowerCase()}/`,
}))
export const guide = [
    {text: '指导', items: [{text: '介绍', link: '/guide/'}]},
    {text: '丰富的hooks', items: coreCategory}
]

function getSidebar(key:string) {
    let bar: Map<string, Array<object>> = new Map()
    for (const name of data) {
        const functions = dataSource.functions.filter(i => i.category === name);
        bar.set(name, [{
            text: name,
            items: functions.map(v => ({
                text: v.name,
                link: `/doc-utils/${v.name}`,
            })),
        }])
    }
    return bar.get(key)
}

export const utils = getSidebar('Utils')
export const ThingJs = getSidebar('Thing.js')
export const ThreeJs = getSidebar('Three.js')
