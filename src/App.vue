<script setup lang="ts">
import TheLayout from '@/components/layout/TheLayout.vue'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

productsStore.fetchProducts()
categoriesStore.fetchCategories()
</script>

<template>
  <TheLayout />
</template>

<style scoped></style>
