import DefaultTheme from 'vitepress/theme'
// import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
// import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import './styles/index.css'
// function comp(app:any){
//     app.component('Demo', Demo)
//     app.component('DemoBlock', DemoBlock)
// }
export default {
    ...DefaultTheme,
    enhanceApp(ctx:any){
        // comp(ctx.app)
    }
}
