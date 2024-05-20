<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import TheCartListItem from '@/components/cart/TheCartListItem.vue'

const cartStore = useCartStore()
</script>

<template>
  <ul :class="$style.list">
    <TheCartListItem
      v-for="cartProduct in cartStore.cartProducts"
      :key="cartProduct.id"
      :cart-product="cartProduct"
    />
  </ul>
</template>

<style module>
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
