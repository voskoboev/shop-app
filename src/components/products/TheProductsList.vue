<script lang="ts" setup>
import TheProductsListItem from '@/components/products/TheProductsListItem.vue'
import { type IProduct } from '@/types/products/IProduct'

defineProps<{
  products: IProduct[]
  cardButtonHandler: (productId: number) => void
}>()
</script>

<template>
  <ul :class="$style.list">
    <TheProductsListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      :cardButtonHandler="cardButtonHandler"
    />
  </ul>
</template>

<style module>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 40px 30px;
}
</style>
