<script lang="ts" setup>
import TheCategories from '@/components/categories/TheCategories.vue'
import AppProducts from '@/components/products/AppProducts.vue'
import { useProductsStore } from '@/stores/productsStore'

const productsStore = useProductsStore()

productsStore.fetchProducts()
</script>

<template>
  <div :class="$style.homeContainer">
    <TheCategories :class="$style.leftPanel" />
    <div :class="$style.rightPanel">
      <AppProducts :products="productsStore.products" v-if="productsStore.areProductsLoaded" />
      <AppSpinner v-else />
    </div>
  </div>
</template>

<style module>
.homeContainer {
  display: flex;
  flex-grow: 1;
}

.leftPanel {
  flex-basis: 250px;
}

.rightPanel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
