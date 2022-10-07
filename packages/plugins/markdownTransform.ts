import type {Plugin} from 'vite'
import {marked} from 'marked'

// interface Infos {
//     id: string,
//     fileName: string,
//     tag: string,
//     debug?: boolean
// }

export const markdownTransform = (): Plugin => {
    return {
        name: 'vite-md-transform',
        async transform(code, id) {
            if (!id.endsWith('.md')) return null;
            // const [pkg, name] = id.split('/').slice(-3)
            const tokens = marked.lexer(code)
            console.log(tokens);
            // const res = await getMarkdownDemo(pkg,name)
            // const frontMatterEnds = code.indexOf('---\n\n') + 4
            // const firstSubheader = code.search(/\n## \w/)
            // const sliceIndex = firstSubheader < 0 ? frontMatterEnds : firstSubheader
            // if (res){
            //     code = code.slice(0, sliceIndex) + res + code.slice(sliceIndex)
            // }
            // console.log(code);
            // return code
        },
        async handleHotUpdate(ctx) {
            const {file} = ctx
            console.log(file);
        }
    }
}

async function getMarkdownDemo(demoInfos:string,url:string){

    return `
<script setup>
import Demo from \'./demo.vue\'
</script>

## Demo

<component-demo>
    <Demo/>
</component-demo>

`
}



