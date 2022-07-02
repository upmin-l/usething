import DefaultTheme from 'vitepress/theme'
import home from './view/Home.vue'

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
       app.component('home',home)
    }
}
