import UnoCSS from 'unocss/vite'
import {defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {resolve} from "path";
export default defineConfig({
    plugins:[
        UnoCSS(),
        Components({
            dirs: resolve(__dirname, '.vitepress/theme/view'),
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                IconsResolver({
                    componentPrefix: '',
                }),
            ],
            dts: './.vitepress/components.d.ts',
            transformer: 'vue3',
        })
    ]
})
