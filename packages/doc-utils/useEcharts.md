---
category: Utils
---

# useEcharts

百度eChart 图表 初始化

> NOTE: If you're using Vue Router, use [`useRoute`](https://router.vuejs.org/guide/advanced/composition-api.html)

## 使用

```js
import {watchEffect, ref} from 'vue'
import {useEcharts} from 'vueThing/utils'

const chart = ref(null)
const [chart, updateOption] = useEcharts()
watchEffect(() => {
    updateOption('更新数据对象')
})
```

