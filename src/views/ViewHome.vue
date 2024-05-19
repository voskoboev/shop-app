<script lang="ts" setup>
import TheCategoriesMenu from '@/components/categories/TheCategoriesMenu.vue'
import AppProducts from '@/components/products/AppProducts.vue'
import { useProductsStore } from '@/stores/productsStore'

const productsStore = useProductsStore()

productsStore.fetchAllProducts()
</script>

<template>
  <div :class="$style.homeContainer">
    <TheCategoriesMenu :class="$style.leftPanel" />
    <div :class="$style.rightPanel">
      <AppProducts :products="productsStore.products" v-if="productsStore.areAllProductsLoaded" />
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
