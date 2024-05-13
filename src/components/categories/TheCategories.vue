<script lang="ts" setup>
import TheCategoriesList from '@/components/categories/TheCategoriesList.vue'
import { useCategoriesStore } from '@/stores/categoriesStore'

const store = useCategoriesStore()

// store.fetchCategories()
</script>

<template>
  <div :class="$style.categories">
    <h2 :class="$style.title">Категории</h2>
    <nav :class="$style.nav" v-if="store.areCategoriesLoaded">
      <TheCategoriesList :categories="store.categories" />
    </nav>
    <AppSpinner :class="$style.spinner" v-else />
  </div>
</template>

<style module>
.categories {
  padding-right: 20px;
  padding-bottom: 20px;
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
