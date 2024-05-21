<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/categoriesStore'
import TheCategoriesMenuListItem from '@/components/categories/TheCategoriesMenuListItem.vue'

const categoriesStore = useCategoriesStore()
</script>

<template>
  <ul :class="$style.list" itemscope itemtype="https://schema.org/ItemList">
    <TheCategoriesMenuListItem
      v-for="(category, index) in categoriesStore.categories"
      :key="category.id"
      :category="category"
      :microMarkupListPosition="index + 1"
    />
  </ul>
</template>

<style module>
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 768px) {
  .list {
    gap: 36px;
  }
}
</style>
