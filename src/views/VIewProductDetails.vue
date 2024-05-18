<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

productsStore.resetIndividualProductValue()
productsStore.fetchIndividualProduct(route.params.id)
</script>

<template>
  <section :class="$style.productDetails">
    <!-- <div>
      <h2>Детали продукта</h2>
    </div> -->

    <!-- prod {{ productsStore.individualProduct }} -->

    <div :class="$style.wrapper" v-if="productsStore.isIndividualProductLoaded">
      <div :class="$style.leftPanel">
        <img
          :class="$style.image"
          :src="productsStore.individualProduct.imageUrl"
          :alt="productsStore.individualProduct.name"
        />
      </div>
      <div :class="$style.rightPanel">
        <h2 :class="$style.title">{{ productsStore.individualProduct.name }}</h2>
        <p :class="$style.price">{{ productsStore.individualProduct.price }} руб.</p>
        <div v-html="productsStore.individualProduct.description" :class="$style.descr"></div>
        <AppButton
          :class="$style.button"
          @click="cartStore.addProductToCart(productsStore.individualProduct.id)"
        >
          Добавить в корзину
        </AppButton>
      </div>
    </div>
    <AppSpinner v-else />
  </section>
</template>

<style module>
.productDetails {
  width: 100%;
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
