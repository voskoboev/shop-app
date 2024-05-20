<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'
import TheCategoriesMenu from '@/components/categories/TheCategoriesMenu.vue'
import AppProducts from '@/components/products/AppProducts.vue'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

categoriesStore.fetchAllCategories()
productsStore.fetchAllProducts()
</script>

<template>
  <div :class="$style.homeContainer">
    <div :class="$style.leftPanel">
      <TheCategoriesMenu
        :class="$style.categoriesMenu"
        :categories="categoriesStore.categories"
        v-if="categoriesStore.areCategoriesLoaded"
      />
      <AppSpinner :class="$style.spinner" v-else />
    </div>
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

.categoriesMenu {
  position: sticky;
  top: 20px;
}

.rightPanel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.spinner {
  margin-top: 40px;
  margin-left: 60px;
}
</style>
