<script lang="ts" setup>
import { type TProductUI } from '@/types/products/TProductUI'
import TheProductCard from '@/components/products/TheProductCard.vue'

defineProps<{
  product: TProductUI
}>()

const log = () => {
  console.log('btn clicked')
}
</script>

<template>
  <li>
    <article>
      <TheProductCard
        :linkUrl="'/'"
        :imageUrl="product.imageUrl"
        :name="product.name"
        :price="product.price"
        :handler="log"
      />
    </article>
  </li>
</template>

<style module></style>
