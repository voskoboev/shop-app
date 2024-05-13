<script lang="ts" setup>
import { type TProductUI } from '@/types/products/TProductUI'

defineProps<{
  product: TProductUI
}>()
</script>

<template>
  <li>
    <article>
      <AppProductCard
        :linkUrl="'/'"
        :imageUrl="product.imageUrl"
        :name="product.name"
        :price="product.price"
      >
        <AppButton :class="$style.button"> Добавить в корзину </AppButton>
      </AppProductCard>
    </article>
  </li>
</template>

<style module>
.button {
  width: 100%;
}
</style>
