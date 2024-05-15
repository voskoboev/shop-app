<script lang="ts" setup>
import TheCategories from '@/components/categories/TheCategories.vue'
import AppProducts from '@/components/products/AppProducts.vue'
import { useProductsStore } from '@/stores/productsStore'

const store = useProductsStore()

store.fetchProducts()
</script>

<template>
  <div :class="$style.homeContainer">
    <TheCategories :class="$style.leftPanel" />
    <div :class="$style.rightPanel">
      <AppProducts :products="store.products" v-if="store.areProductsLoaded" />
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
