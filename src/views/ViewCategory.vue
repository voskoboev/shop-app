<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AppProducts from '@/components/products/AppProducts.vue'
import { useProductsStore } from '@/stores/productsStore'

const route = useRoute()
const productsStore = useProductsStore()

productsStore.resetCategoryProductsValue()
productsStore.fetchCategoryProducts(route.params.id)
</script>

<template>
  <div :class="$style.productsContainer">
    <AppProducts
      :products="productsStore.categoryProducts"
      v-if="productsStore.areCategoryProductsLoaded"
    />
    <AppSpinner v-else />
  </div>
</template>

<style module>
.productsContainer {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
