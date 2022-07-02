export default {
    title: 'VueThing',
    base: '/',
    description: 'Collection of essential Vue Composition Utilities',
    ignoreDeadLinks: true,
    themeConfig:{
        docsDir: 'packages',
        logo:'/icon.png',
        editLinks: true,
        nav:[
            {
                text: 'Add-ons',
                link: '/add-ons',
              },
              {
                text: 'Playground',
                link: 'https://play.vueuse.org',
              },
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                ]
            }
        ]
    }
}
