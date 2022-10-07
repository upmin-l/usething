<template>
  <div class="demo">
    <slot/>
  </div>
</template>

<script setup>
const props = defineProps({
  code: {
    type: String,
    required: true
  },
})
const sfcCode = decodeURIComponent(props.code)


// onMounted(() => {
//   hljs.registerLanguage('javascript', javascript);
//   hljs.registerLanguage('html', xml)
//   hljs.registerLanguage('css', css)
//   hljs.initHighlighting();
//   height.value =proxy.$refs.exampleCode.clientHeight
// })
</script>

