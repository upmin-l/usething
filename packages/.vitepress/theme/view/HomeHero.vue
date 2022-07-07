<template>
  <header class="home-hero pt-15 pb-10 px-5">
    <p align="center">
      <a href="https://github.com/vueuse/vueuse">
        <img
            class="!h-75 light:hidden"
            src="/logo.png"
            alt="VueUse - Collection of essential Vue Composition Utilities"
        >
      </a>
    </p>
    <div class="description mx-auto  mb-2">一款基于 Vue 的可视化路线开发hooks</div>
    <div class="mb-15 flex place-content-center gap-1">
      <a href="https://www.npmjs.com/package/@vueuse/core" target="__blank"><img src="https://img.shields.io/npm/v/@vueuse/core?color=a1b858&label=" alt="NPM version"></a>
      <a href="https://www.npmjs.com/package/@vueuse/core" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vueuse/core?color=50a36f&label="></a>
      <img alt="Function Count" src="https://vueuse.org/badge-function-count.svg">
    </div>
    <p class="actions flex gap-2 place-content-center">
      <a class="get-started" href="/guide/">开始使用<carbon:arrow-right class="icon" /></a>
      <a class="go-github" href="https://github.com/upmin-l/usething" target="_blank"><carbon:logo-github class="icon" /> GitHub</a>
    </p>
  </header>
</template>

<script setup>

</script>

<style>
.description {
  max-width: 760px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
  font-size: 19px;
}
.home-hero {
  margin: 0 0 2.75rem;
  text-align: center;
}
.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vp-c-gray-light-4);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vp-c-green);
  color: #fff;
}
.go-github{
  color: var(--vp-c-indigo-soft);
}
</style>
