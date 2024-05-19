<script lang="ts" setup>
import TheCategoriesMenuListItem from '@/components/categories/TheCategoriesMenuListItem.vue'
import { useCategoriesStore } from '@/stores/categoriesStore'

const categoriesStore = useCategoriesStore()
</script>

<template>
  <ul :class="$style.list">
    <TheCategoriesMenuListItem
      v-for="category in categoriesStore.categories"
      :key="category.id"
      :category="category"
    />
  </ul>
</template>

<style module>
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
