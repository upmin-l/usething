import UnoCSS from 'unocss/vite'
import {defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {resolve} from "path";
import {markdownTransform} from './plugins/markdownTransform'
export default defineConfig({
    plugins:[
        markdownTransform(),
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
        }),
        Icons({
            compiler: 'vue3',
            defaultStyle: 'display: inline-block',
        }),
        UnoCSS()
    ]
})
