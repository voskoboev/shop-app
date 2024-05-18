<script lang="ts" setup>
import TheCartListItem from '@/components/cart/TheCartListItem.vue'
import { useCartStore } from '@/stores/cartStore'

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
9

<style module>
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
