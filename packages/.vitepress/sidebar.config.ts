import {categories, coreCategoryNames, dataSource} from '../../dataSource/dataSource'

const data = Array.from(categories)
export const guide = [
    {
        text: '指导',
        items: [
            {text: '介绍', link: '/guide/'}
        ]
    },
    {
        text: '丰富的hooks',
        items: coreCategoryNames.map(v => ({
            text: v,
            link: `/doc-${v.toLocaleLowerCase()}/`,
        }))
    }
]

function getSidebar() {
    let bar = []
    console.log(data);
    for (const name of data) {
        const functions = dataSource.functions.filter(i => i.category === name);
        bar.push({
            text: name,
            items: functions.map(v => ({
                text: v.name,
                link: `/doc-utils/${v.name}`,
            })),
            link: `/${functions[0].package}/README`
        })
    }
    return bar
}

export const utils = getSidebar()
