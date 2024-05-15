<script lang="ts" setup>
import AppProducts from '@/components/products/AppProducts.vue'
import { useProductsStore } from '@/stores/productsStore'

const store = useProductsStore()

store.fetchProducts()
</script>

<template>
  <div :class="$style.productsContainer">
    <AppProducts :products="store.products" v-if="store.areProductsLoaded" />
    <AppSpinner v-else />
    <!-- <AppSpinner /> -->
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
