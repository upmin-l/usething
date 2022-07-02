import DefaultTheme from 'vitepress/theme'
import home from './view/Home.vue'

export default {
    ...DefaultTheme,
    Layout:home,
    enhanceApp(ctx) {

    }
}
