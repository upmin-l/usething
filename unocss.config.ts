/*
 * @Author: strong sunshine
 * @Change: strong sunshine
 * @Date: 2022-04-14 09:33:45
 * @Description: unocss
 */

import {
    defineConfig,
    /* 默认编译库，相当于presetWind */
    presetUno,
    /* 编译属性，否则只可以使用class */
    presetAttributify,
    /* 编译 @apply */
    transformerDirectives,
    /* 编译 group hover:(text-gray-900...) */
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            primary: '#3eaf7c',
        },
        fontFamily: {
            mono: 'var(--vt-font-family-mono)',
        },
    },
    shortcuts: [
        ['apply-bg-full', 'bg-center bg-no-repeat bg-full'],
        ['wrap-full', 'w-full h-full'],
        ['flex-center', 'flex items-center justify-center'],
        ['flex-around', 'flex items-center justify-around'],
        ['flex-between', 'flex items-center justify-between'],
    ],
    rules: [
        ['bg-full', {'background-size': '100% 100%'}, {layer: 'base'}],
        ['bg-x-41', {'background-size': '100% 41px'}, {layer: 'base'}],
    ],
    /* 配置hover等 */
    variants: [],
    presets: [
        presetUno(),
        presetAttributify(),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
});
