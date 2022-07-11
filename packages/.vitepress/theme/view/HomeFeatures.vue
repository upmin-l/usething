<template>
  <section class="features vt-box-container">
    <div v-for="(feature, index) in features" :key="index" class="item-box">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.details }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
const { frontmatter } = useData()

interface Feature {
  title?: string
  details?: string
}
const features = computed<Feature[]>(() => {
  return frontmatter.value.features ? frontmatter.value.features : []
})
</script>

<style>
.features{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  color: var(--vp-c-text-2);
}
.item-box{
  border-radius: 8px;
  background-color: transparent;
  font-size: 16px;
  flex: 0 31%;
  font-weight: 500;
  padding: 20px;
  margin: 10px;
}
.item-box h3{
  color: var(--vp-c-text-1);
}
</style>
