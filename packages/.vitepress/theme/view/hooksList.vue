<template>
  <div class="grid grid-cols-[80px_auto] gap-y-2 mt-10">
    <span opacity="80" text="sm">Core</span>
    <div flex="~ wrap" gap="2" m="b-2">
      <button v-for="item of coreCategories" :key="item" class="hooks-button" :class="{ active: category === item }"
              @click="toggleCategory(item)">
        {{ item }}
      </button>
    </div>
  </div>
  <div flex="~ col" gap="2" class="relative" p="t-5">
    <div v-for="item of list" :key="item.name" class="!text-16px !tracking-wide !m-0" p="y-2">
      <div text="sm" flex="~ gap1" items-center>
        <a
            :href="item.docs" bg="gray-400/5" p="x-1.5 y-0.5" class="rounded items-center" flex="inline gap-1 none"
            my-auto
        >
          <span v-html="item.name"></span>
        </a>
        <span op50>-</span>
        <span class="whitespace-wrap" v-html="item.description"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'uno.css'
import {computed, toRef, reactive} from 'vue'
import type {Ref} from 'vue'
import Fuse from 'fuse.js'
import {functions, coreCategoryNames} from '../../../../dataSource/dataSource'

const coreCategories = coreCategoryNames.filter(i => !i.startsWith('@'))

const hash = reactive(Object.assign({}, new URL(window.location.href).hash.slice(1).split('=')))
const category = toRef(hash, '1') as Ref<string | null>
const list = computed(() => {
  if (!category.value) return functions
  return functions.filter((i) => i.category == category.value)
})
// todo 后续搜索需要
const fuse = computed(() => new Fuse(list.value, {
  keys: ['name', 'description'],
}))

function toggleCategory(cate: string) {
  category.value = category.value === cate ? null : cate
}
</script>


