import {coreCategory, getSidebar, guide} from "./sidebar.config";
const list = getSidebar()
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
        socialLinks: [
            {icon: 'github', link: 'https://github.com/upmin-l/usething'}
        ],
        sidebar: {
            '/guide/': guide,
            '/hooks':list,
            '/core/':list,
        }
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: {permalink: false},

        // options for markdown-it-toc
        toc: {includeLevel: [1, 2]},

        config: (md: any) => {
            const {demoBlockPlugin} = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}
