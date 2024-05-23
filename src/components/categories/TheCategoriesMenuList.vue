<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/categoriesStore'
import TheCategoriesMenuListItem from '@/components/categories/TheCategoriesMenuListItem.vue'

const categoriesStore = useCategoriesStore()
</script>

<template>
  <ul role="menu" itemscope itemtype="https://schema.org/ItemList" :class="$style.menuList">
    <TheCategoriesMenuListItem
      v-for="(category, index) in categoriesStore.allCategories"
      :key="category.id"
      :category="category"
      :microMarkupListPosition="index + 1"
    />
  </ul>
</template>

<style module>
.menuList {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 768px) {
  .menuList {
    gap: 36px;
  }
}
</style>
