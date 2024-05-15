<script lang="ts" setup>
import AppProducts from '@/components/products/AppProducts.vue'
import { useProductsStore } from '@/stores/productsStore'

const productsStore = useProductsStore()

productsStore.fetchProducts()
</script>

<template>
  <div :class="$style.productsContainer">
    <AppProducts :products="productsStore.products" v-if="productsStore.areProductsLoaded" />
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
