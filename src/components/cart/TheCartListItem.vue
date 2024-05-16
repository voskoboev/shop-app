<script lang="ts" setup>
import TheCartListItemCard from '@/components/cart/TheCartListItemCard.vue'
import { type TCartProductUI } from '@/types/cart/TCartProductUI'

defineProps<{
  cartProduct: TCartProductUI
}>()
</script>

<template>
  <li>
    <TheCartListItemCard :cart-product="cartProduct" />
  </li>
</template>
