<script lang="ts" setup>
import TheProductsList from '@/components/products/TheProductsList.vue'
import { useProductsStore } from '@/stores/productsStore'

const store = useProductsStore()

// store.fetchProducts()
</script>

<template>
  <section :class="$style.products">
    <TheProductsList v-if="store.areProductsLoaded" :products="store.products" />
    <AppSpinner v-else />
  </section>
</template>

<style module>
.products {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
