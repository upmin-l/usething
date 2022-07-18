import {coreCategory, guide, ThingJs, ThreeJs, utils} from "./sidebar.config";

console.log(process.env.NODE_ENV);
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
            {text: '功能性组件', items: coreCategory},

        ],
        sidebar: {
            '/guide/': guide,
            '/doc-utils/': utils,
            '/doc-thing.js/': ThingJs,
            '/doc-three.js/': ThreeJs
        }
    }
}
