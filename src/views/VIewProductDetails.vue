<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { useProductsStore } from '@/stores/productsStore'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

const route = useRoute()
const cartStore = useCartStore()
const productsStore = useProductsStore()

productsStore.resetIndividualProductValue()
productsStore.fetchIndividualProduct(route.params.id)

const breadcrumbsItems = computed((): IBreadcrumbsItem[] => {
  return [
    {
      name: productsStore.individualProduct.name,
      path: `/products/${route.params.id}`
    }
  ]
})
</script>

<template>
  <div :class="$style.productDetails">
    <div :class="$style.breadcrumbsInfo">
      <AppBreadcrumbs :items="breadcrumbsItems" v-if="productsStore.isIndividualProductLoaded" />
      <AppSpinner v-else :class="$style.breadcrumbsSpinner" />
    </div>
    <section :class="$style.productInfo" itemscope itemtype="https://schema.org/Product">
      <div :class="$style.wrapper" v-if="productsStore.isIndividualProductLoaded">
        <div :class="$style.leftPanel">
          <img
            :class="$style.image"
            :src="productsStore.individualProduct.imageUrl"
            :alt="productsStore.individualProduct.name"
            itemprop="image"
          />
        </div>
        <div :class="$style.rightPanel">
          <h2 :class="$style.title" itemprop="name">
            {{ productsStore.individualProduct.name }}
          </h2>
          <p :class="$style.price">
            <span itemprop="price" :content="productsStore.individualProduct.price">
              {{ productsStore.individualProduct.price }}
            </span>
            <span itemprop="priceCurrency" content="RUB">&#8381;</span>
          </p>
          <div v-html="productsStore.individualProduct.description" :class="$style.descr"></div>
          <AppButton
            @click="cartStore.addProductToCart(productsStore.individualProduct.id)"
            :class="$style.button"
            itemprop="potentialAction"
            itemscope
            itemtype="https://schema.org/BuyAction"
          >
            <span itemprop="name"> Добавить в корзину </span>
          </AppButton>
        </div>
      </div>
      <AppSpinner v-else />
    </section>
  </div>
</template>

<style module>
.productDetails {
  width: 100%;
  height: 100%;
}

.breadcrumbsInfo {
  height: 50px;
}

.breadcrumbsSpinner {
  margin-left: 50px;
}

.productInfo {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  height: 100%;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}

.leftPanel {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .leftPanel {
    width: 100%;
    padding-bottom: 30px;
  }
}

.image {
  width: 100%;
  height: 100%;
  border-radius: var(--rounding);
  object-fit: cover;
}

.title {
  font-size: 2em;
  font-weight: 600;
}

.price {
  font-size: 1.8em;
  font-weight: 700;
}

.descr {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.descr p:has(strong) {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.button {
  margin-top: auto;
}

.rightPanel {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 30px;
  width: 50%;
}

@media (max-width: 768px) {
  .rightPanel {
    width: 100%;
    padding-left: 0;
    gap: 20px;
  }
}
</style>
