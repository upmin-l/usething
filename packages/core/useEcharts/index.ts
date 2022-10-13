import * as echarts from 'echarts'
// @ts-ignore
import { markRaw, onMounted, onUnmounted, ref} from 'vue'

export const useEcharts = (option?:Object, callback?:Function) => {
    const chart = ref()
    const chartInstance = markRaw({
        ctx: null
    })

    /**
     * @param {object} ops echarts配置
     */
    function updateOption(ops:Object) {
        // @ts-ignore
        chartInstance.ctx && chartInstance.ctx.setOption(ops)
    }

    onMounted(() => {
        setTimeout(() => {
            // @ts-ignore
            chartInstance.ctx = echarts.init(chart.value)
            callback && callback(chartInstance.ctx)
            if (typeof option === 'function') updateOption(option())
            else { // @ts-ignore
                updateOption(option)
            }
        })
    })

    onUnmounted(() => {
        // @ts-ignore
        chartInstance.ctx && chartInstance.ctx.dispose()
    })

    return [chart, updateOption, chartInstance]
}

