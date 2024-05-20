<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'
import AppProducts from '@/components/products/AppProducts.vue'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

const route = useRoute()
const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()

categoriesStore.resetIndividualCategoryValue()
categoriesStore.fetchIndividualCategory(route.params.id)

const breadcrumbsItems = computed((): IBreadcrumbsItem[] => {
  return [
    {
      name: categoriesStore.individualCategory.name,
      path: `/category/${route.params.id}`
    }
  ]
})

productsStore.resetCategoryProductsValue()
productsStore.fetchCategoryProducts(route.params.id)
</script>

<template>
  <div :class="$style.productsContainer">
    <div :class="$style.info">
      <AppBreadcrumbs :items="breadcrumbsItems" v-if="categoriesStore.isIndividualCategoryLoaded" />
      <AppSpinner v-else :class="$style.breadcrumbsSpinner" />
    </div>
    <div :class="$style.wrapper">
      <AppProducts
        :class="$style.products"
        :products="productsStore.categoryProducts"
        v-if="productsStore.areCategoryProductsLoaded"
      />
      <AppSpinner v-else />
    </div>
  </div>
</template>

<style module>
.productsContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.info {
  display: flex;
  align-items: center;
  min-height: 50px;
}

.breadcrumbsSpinner {
  margin-left: 50px;
}

.wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  align-self: flex-start;
}
</style>
