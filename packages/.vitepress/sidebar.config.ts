import {categories, coreCategoryNames, dataSource} from '../../dataSource/dataSource'

const data = Array.from(categories)
const sign = process.env.DEV === 'development'
export const coreCategory = coreCategoryNames.map(v => ({
    text: v,
    link: sign ? `/functions#category=${v.toLocaleLowerCase()}` : `/doc-${v.toLocaleLowerCase()}`,
}))
export const guide = [
    {text: '指导', items: [{text: '介绍', link: '/guide/'}]},
    {text: '丰富的hooks', items: coreCategory}
]

function getSidebar(key: string = 'dev') {
    let bar: Map<string, Array<object>> = new Map()
    const links = []
    for (const name of data) {
        const functions = dataSource.functions.filter(i => i.category === name);
        if (sign) {
            links.push({
                text: name,
                items: functions.map(i => ({
                    text: i.name,
                    link: `/${i.package}/${i.name}/`,
                })),
            })
        } else {
            bar.set(name, [{
                text: name,
                items: functions.map(v => ({
                    text: v.name,
                    link: `/doc-utils/${v.name}`,
                })),
            }])
        }
    }
    return sign ? links : bar.get(key)
}

export const utils = getSidebar('Utils')
export const ThingJs = getSidebar('Thing.js')
export const ThreeJs = getSidebar('Three.js')
