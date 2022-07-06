import type { Plugin } from 'vite'
import {functionNames} from '../../dataSource/dataSource'
export  const markdownTransform=():Plugin=>{
    return {
        name:'vite-md-transform',
        enforce: 'pre',
        async transform(code,id){
            if (!id.endsWith('.md')) return null;
            console.log(code,functionNames);
        }
    }
}
