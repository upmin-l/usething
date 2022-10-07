import UnoCSS from 'unocss/vite'
import {defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {resolve} from "path";
import inspect from 'vite-plugin-inspect'
import {markdownTransform} from './plugins/markdownTransform'
export default defineConfig({
    server: {
        hmr: {
            overlay: false,
        },
        fs: {
            allow: [
                resolve(__dirname, '..'),
            ],
        },
    },
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
        UnoCSS(),
        inspect()
    ]
})
