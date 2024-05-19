<script lang="ts" setup>
import TheCart from '@/components/cart/TheCart.vue'
import { useCartStore } from '@/stores/cartStore'
import type AppPlaceholder from '@/components/UI/AppPlaceholder.vue'

const cartStore = useCartStore()
</script>

<template>
  <div :class="$style.wrapper">
    <TheCart v-if="cartStore.areCartProductsAvailable" />
    <AppPlaceholder v-else> Корзина пуста </AppPlaceholder>
  </div>
</template>

<style module>
.wrapper {
  width: 100%;
}
</style>
