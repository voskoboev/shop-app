<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'
import AppProducts from '@/components/products/AppProducts.vue'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

const route = useRoute()
const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
const cartStore = useCartStore()

const breadcrumbsItems = computed((): IBreadcrumbsItem[] => {
  return [
    {
      name: categoriesStore.individualCategory.name,
      path: `/category/${route.params.id}`
    }
  ]
})

categoriesStore.resetIndividualCategoryValues()
categoriesStore.fetchIndividualCategory(route.params.id)

productsStore.resetCategoryProductsValues()
productsStore.fetchCategoryProducts(route.params.id)
</script>

<template>
  <div :class="$style.productsContainer">
    <div :class="$style.navWrapper">
      <AppError v-if="categoriesStore.isIndividualCategoryError">
        Ошибка при загрузке категории
      </AppError>
      <AppBreadcrumbs
        v-else-if="categoriesStore.isIndividualCategoryLoaded"
        :items="breadcrumbsItems"
      />
      <AppSpinner v-else :class="$style.breadcrumbsSpinner" />
    </div>
    <div :class="$style.productsWrapper">
      <AppError v-if="productsStore.isCategoryProductsError">
        Ошибка при загрузке спиcка товаров категории
      </AppError>
      <AppProducts
        v-else-if="productsStore.areCategoryProductsLoaded"
        :class="$style.products"
        :products="productsStore.categoryProducts"
        :cardButtonHandler="cartStore.addProductToCartFromCategory"
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

@media (max-width: 768px) {
  .productsContainer {
    height: 100%;
  }
}

.navWrapper {
  display: flex;
  align-items: center;
  min-height: 50px;
}

.breadcrumbsSpinner {
  margin-left: 50px;
}

.productsWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.products {
  align-self: flex-start;
}
</style>
