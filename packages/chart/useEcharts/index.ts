import * as echarts from 'echarts'
import { markRaw, onMounted, onUnmounted, ref} from 'vue'

export const useEcharts = (option, callback) => {
    const chart = ref()
    const chartInstance = markRaw({
        ctx: null
    })

    /**
     * @param {object} ops echarts配置
     */
    function updateOption(ops) {
        chartInstance.ctx && chartInstance.ctx.setOption(ops)
    }

    onMounted(() => {
        setTimeout(() => {
            chartInstance.ctx = echarts.init(chart.value)
            callback && callback(chartInstance.ctx)
            if (typeof option === 'function') updateOption(option())
            else updateOption(option)
        })
    })

    onUnmounted(() => {
        chartInstance.ctx && chartInstance.ctx.dispose()
    })

    return [chart, updateOption, chartInstance]
}

