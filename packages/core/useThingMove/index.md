---
category: Core
---

# useThingMove

让物体基于tween 补间动画 动起来

> tween.js是补间(动画)（来自 [in-between](https://en.wikipedia.org/wiki/Inbetweening)）是一个概念，允许你以平滑的方式更改对象的属性。你只需告诉它哪些属性要更改，当补间结束运行时它们应该具有哪些最终值，以及这需要多长时间，补间引擎将负责计算从起始点到结束点的值。
> [tween.js文档](https://github.com/tweenjs/tween.js/blob/master/docs/user_guide.md)


## 使用
```js
import {useThingMove} from 'vueThing/utils'
const [grow,back] = useThingMove()
```
