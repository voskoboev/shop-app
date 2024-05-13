<script lang="ts" setup>
import TheCategoriesListItem from '@/components/categories/TheCategoriesListItem.vue'
import { type TCategoryUI } from '@/types/categories/TCategoryUI'

defineProps<{
  categories: TCategoryUI[]
}>()
</script>

<template>
  <ul :class="$style.list">
    <TheCategoriesListItem v-for="category in categories" :key="category.id" :category="category" />
  </ul>
</template>

<style module>
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
