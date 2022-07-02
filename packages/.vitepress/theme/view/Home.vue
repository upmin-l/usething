<template>
  <main>
    <home-hero />
  </main>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
import { useData, withBase } from 'vitepress'
import HomeHero from "./HomeHero.vue";
</script>


