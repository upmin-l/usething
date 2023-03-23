/*
* TODO
*typingSection 类型定义
*
* */

import type {Plugin} from 'vite'
import {marked} from 'marked'
import path, {join, resolve} from "path";
import fs from 'fs-extra'
// interface Infos {
//     id: string,
//     fileName: string,
//     tag: string,
//     debug?: boolean
// }

type ITokens = {
    type: string,
    text: string,
    tokens: Array<object>,
    lang: string
}
export const markdownTransform = (): Plugin => {
    return {
        name: 'vite-md-transform',
        async transform(code, id) {
            if (!id.endsWith('.md')) return null;
            console.log(id);
return
            const tokens = marked.lexer(code)
            const parts = transform(tokens)
            let template = fs
                .readFileSync(path.resolve(__dirname, '../.vitepress/theme/view', 'componentTemplate.vue'))
                .toString();
            const docMainTemplate = marked.parser(tokens, {
                gfm: true,
                renderer: mdRenderer()
            })
            console.log(parts)
            const header = await resolveVue(template, docMainTemplate)
            return header
        },
        async handleHotUpdate(ctx) {
            const {file} = ctx
        }
    }
}

function transform(tokens: Array<ITokens>) {
    const contentTokens = {
        template: '',
        style: '',
        title: '',
        script: '',
        des: '',
        content: '',
        defaultContent:[]
    }
    for (let key of tokens) {
        switch (key.type) {
            case 'heading':
                contentTokens.title = key.text
                break;
            case "code":
                if (key.lang === 'js' || key.lang === 'script') contentTokens.script = key.text;
                if (key.lang === 'template' || key.lang === 'html') contentTokens.template = key.text;
                if (key.lang === 'style' || key.lang === 'css') contentTokens.style = key.text
                break;
            default:
                contentTokens.defaultContent.push(key)
        }
    }
    // console.log(contentTokens);
    // // @ts-ignore
    // contentTokens.content = marked.parser(defaultContent, {
    //     renderer: mdRenderer()
    // })
    return contentTokens
}

async function resolveVue(template: string, docMainTemplate: string) {
    let src = template
    src = src.replace(/<!--SCRIPT_SLOT-->/, `<script setup>import demo from './demo.vue'</script>`)
    src = src.replace(/<!--DEMO_SLOT-->/, '<demo/>',)
    src = src.replace(/<!--USAGE_SLOT-->/, docMainTemplate,)
    return src.trim()
//     return `
// <ComponentTemplate >
//
// </ComponentTemplate>
// `
    // src = src.replace(/<!--DEMO_SLOT-->/, '<demo/>')
    // src = src.replace(/<!--CODE_SLOT-->/, template)
    // return src.trim()
}


function mdRenderer() {
    const renderer = new marked.Renderer();
    const overrides = {
        //头部
        heading: (text: string, level: string) => {
            return `<h${level}>${text}</h${level}>\n`
        },
        //段落
        //段落
        paragraph: (text: string) => {
            return `<p>${text}</p>`
        },
        // table(header, body) {
        //     if (body) body = '<tbody>' + body + '</tbody>'
        //     return (
        //         '<div class="md-table-wrapper">' +
        //         '123' +
        //         '</div>'
        //     )
        // },
    }
    Object.keys(overrides).forEach((key) => {
        // @ts-ignore
        renderer[key] = overrides[key]
    })
    return renderer
}
