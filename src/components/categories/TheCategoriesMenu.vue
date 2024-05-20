<script lang="ts" setup>
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import { type ICategory } from '@/types/categories/ICategory'

defineProps<{
  categories: ICategory[]
}>()
</script>

<template>
  <div :class="$style.categories">
    <h2 :class="$style.title">Категории</h2>
    <nav :class="$style.nav">
      <TheCategoriesMenuList :categories="categories" />
    </nav>
  </div>
</template>

<style module>
.categories {
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
}

.nav {
  position: sticky;
  top: 20px;
}

/* .spinner {
  margin-top: 40px;
  margin-left: 60px;
} */
</style>
