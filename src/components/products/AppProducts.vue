<script lang="ts" setup>
import TheProductsList from '@/components/products/TheProductsList.vue'
import { type IProduct } from '@/types/products/IProduct'

defineProps<{
  // title?: string
  products: IProduct[]
}>()
</script>

<template>
  <section>
    <!-- <h2 v-if="title" :class="$style.title">{{ title }}</h2> -->
    <TheProductsList :products="products" />
  </section>
</template>

<style module>
.title {
  font-size: 1.6em;
  font-weight: 500;
  margin-bottom: 40px;
}
</style>
