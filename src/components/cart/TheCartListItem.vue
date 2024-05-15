<script lang="ts" setup>
import TheCartCard from '@/components/cart/TheCartCard.vue'
import { type TCartProductUI } from '@/types/cart/TCartProductUI'

defineProps<{
  cartProduct: TCartProductUI
}>()
</script>

<template>
  <li>
    <TheCartCard
      :imageUrl="cartProduct.thumbnailUrl"
      :name="cartProduct.name"
      :price="cartProduct.price"
    />
  </li>
</template>

<style module></style>
