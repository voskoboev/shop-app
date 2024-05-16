<script lang="ts" setup>
import { type TProductUI } from '@/types/products/TProductUI'
import TheProductCard from '@/components/products/TheProductCard.vue'

import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

defineProps<{
  product: TProductUI
}>()

// const log = () => {
//   console.log('btn clicked')
// }
</script>

<template>
  <li>
    <article>
      <TheProductCard :product="product" :handler="cartStore.addProductToCart" />
    </article>
  </li>
</template>
