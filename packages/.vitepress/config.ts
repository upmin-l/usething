import {coreCategory, guide, utils} from "./sidebar.config";

export default {
    title: 'VueThing',
    base: '/',
    description: 'Collection of essential Vue Composition Utilities',
    ignoreDeadLinks: true,
    themeConfig: {
        docsDir: 'packages',
        logo: '/icon.png',
        editLinks: true,
        nav: [
            {text: '指南', link: '/guide/'},
            {text: 'hooks 分类', items: coreCategory},

        ],
        sidebar: {
            '/guide/': guide,
            '/doc-utils/': utils
        }
    }
}
