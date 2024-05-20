<script lang="ts" setup>
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import { useCategoriesStore } from '@/stores/categoriesStore'

const categoriesStore = useCategoriesStore()

categoriesStore.fetchAllCategories()
</script>

<template>
  <div :class="$style.categories">
    <h2 :class="$style.title">Категории</h2>
    <nav :class="$style.nav" v-if="categoriesStore.areCategoriesLoaded">
      <TheCategoriesMenuList :categories="categoriesStore.categories" />
    </nav>
    <AppSpinner :class="$style.spinner" v-else />
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

.spinner {
  margin-top: 40px;
  margin-left: 60px;
}
</style>
