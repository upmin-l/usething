import * as TWEEN from '@tweenjs/tween.js'
interface Layer extends Object{
    node: any;
    visible:boolean,
}
export const useBuildingMove = () => {
    const grow = (layer:Layer,move:any, timer = 2000) => {
        if (!move) move = TWEEN.Easing.Linear.None
        const res = new TWEEN.Tween({num: 0})
            .to({num: 1}, timer)
            .easing(move)
            .onUpdate(({num}:{num:number}) => {
                layer.node.children.forEach((e:any) => e.scale.y = num)
            })
            .onStart(() => layer.visible = true)
        res.start()
    }
    const back = (layer:Layer,move:any, timer = 2000) => {
        if (!move) move = TWEEN.Easing.Linear.None
        const res = new TWEEN.Tween({num: 1})
            .to({num: 0}, timer)
            .easing(move)
            .onUpdate(({num}:{num:number}) => {
                (layer.node.children as any).forEach((e:any) => e.scale.y = num)
            })
            .onStart(() => layer.visible = true)
        res.start()
    }
    return [grow,back]
}
