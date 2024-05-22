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
  <div :class="$style.home">
    <div :class="$style.leftPanel">
      <TheCategoriesMenu
        :class="$style.categoriesMenu"
        :categories="categoriesStore.categories"
        v-if="categoriesStore.areCategoriesLoaded"
      />
      <AppSpinner :class="$style.categoriesSpinner" v-else />
    </div>
    <div :class="$style.rightPanel">
      <AppProducts :products="productsStore.products" v-if="productsStore.areAllProductsLoaded" />
      <AppSpinner v-else />
    </div>
  </div>
</template>

<style module>
.home {
  display: flex;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .home {
    flex-direction: column;
    height: 100%;
  }
}

.leftPanel {
  flex-basis: 250px;
}

@media (max-width: 768px) {
  .leftPanel {
    flex-basis: auto;
  }
}

.categoriesMenu {
  position: sticky;
  top: 20px;
}

@media (max-width: 768px) {
  .categoriesMenu {
    position: static;
  }
}

.rightPanel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.categoriesSpinner {
  margin-top: 40px;
  margin-left: 60px;
}

@media (max-width: 768px) {
  .categoriesSpinner {
    margin-top: 20px;
    margin-left: 40px;
  }
}
</style>
