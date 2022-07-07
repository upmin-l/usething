
import fg from 'fast-glob'
import {packages} from "../ds/packages";
import {join, resolve} from "path";
const DIR_ROOT = resolve(__dirname, '../')
const DIR_SRC = resolve(DIR_ROOT, 'packages')
import fs from 'fs-extra'
async function copyMarkdown(){
    for (const key of packages){
        const dir = join(DIR_SRC, key.name)
        const files = await fg(['**/index.md'],{
            onlyDirectories: false,
            cwd:dir,
            ignore: [
                '_*',
                'dist',
                'node_modules',
            ],
            absolute:true,
            markDirectories:true,
        })
        console.log(dir,files);
        files.map((v)=>{
            fs.copySync(v,'')
        })
    }

}
copyMarkdown().then(()=>{

})
