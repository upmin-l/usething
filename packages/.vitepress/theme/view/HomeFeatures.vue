<template>

</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
console.log(frontmatter.value.features);
</script>

<style scoped>

</style>
