<script lang="ts" setup>
import TheProductsListItem from '@/components/products/TheProductsListItem.vue'
import { type TProductUI } from '@/types/products//TProductUI'

defineProps<{
  products: TProductUI[]
}>()
</script>

<template>
  <ul :class="$style.list">
    <TheProductsListItem v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<style module>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 40px 30px;
}
</style>
