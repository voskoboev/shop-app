<script lang="ts" setup>
import TheCartList from '@/components/cart/TheCartList.vue'

import { useProductsStore } from '@/stores/productsStore'

const productsStore = useProductsStore()

productsStore.fetchProducts()
</script>

<template>
  <div :class="$style.cart">
    <h2 :class="$style.title">Корзина</h2>
    <TheCartList :cart-products="productsStore.products" />
  </div>
</template>

<style module>
.cart {
  width: 100%;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>
