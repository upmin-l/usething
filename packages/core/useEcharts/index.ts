import * as echarts from 'echarts'
import { markRaw, onMounted, onUnmounted, ref } from 'vue'
import type {EChartOption} from 'echarts' 
export const useEcharts = (option?: EChartOption|object, callback?: Function) => {
    const chart = ref()
    const chartInstance = markRaw({
        ctx: null as any
    })

    /**
     * @param {EChartOption|object} ops echarts配置
     */
    function updateOption(ops?: EChartOption|Object) {
        chartInstance.ctx && chartInstance.ctx.setOption(ops)
    }

    onMounted(() => {
        setTimeout(() => {
            chartInstance.ctx = echarts.init(chart.value)
            callback && callback(chartInstance.ctx)
            if (typeof option === 'function') updateOption(option())
            else { 
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
