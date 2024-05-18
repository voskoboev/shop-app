<script lang="ts" setup>
import TheCartList from '@/components/cart/TheCartList.vue'
import { useCartStore } from '@/stores/cartStore'
import type AppPlaceholder from '../UI/AppPlaceholder.vue'

const cartStore = useCartStore()
</script>

<template>
  <div :class="$style.cart">
    <h2 :class="$style.title">Корзина</h2>
    <div :class="$style.wrapper">
      <TheCartList v-if="cartStore.areCartProductsAvailable" />
      <AppPlaceholder v-else> Корзина пуста </AppPlaceholder>
    </div>
  </div>
</template>

<style module>
.cart {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
}

.wrapper {
  justify-content: flex-start;
  align-items: center;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.placeholder {
  flex-grow: 1;
}
</style>
