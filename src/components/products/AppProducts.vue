<script lang="ts" setup>
import TheProductsList from '@/components/products/TheProductsList.vue'
import { type IProduct } from '@/types/products/IProduct'

defineProps<{
  products: IProduct[]
}>()
</script>

<template>
  <section>
    <TheProductsList :products="products" />
  </section>
</template>
