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
            link: `/doc${v}/`,
        }))
    }
]

function getSidebar() {
    let bar = []
    for (const name of data) {
        const functions = dataSource.functions.filter(i => i.category === name);
        bar.push({
            text: name,
            items: functions.map(v => ({
                text: v.name,
                link: `/docUtils/${v.name}/`,
            })),
            link: `/${functions[0].package}/README`
        })
    }
    console.log(JSON.stringify(bar));
    return bar
}

export const utils = getSidebar()
