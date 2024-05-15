<script lang="ts" setup>
import TheCartListItem from '@/components/cart/TheCartListItem.vue'
import { type TCartProductUI } from '@/types/cart/TCartProductUI'

defineProps<{
  cartProducts: TCartProductUI[]
}>()
</script>

<template>
  <ul :class="$style.list">
    <TheCartListItem
      v-for="cartProduct in cartProducts"
      :key="cartProduct.id"
      :cart-product="cartProduct"
    />
  </ul>
</template>

<style module>
.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
