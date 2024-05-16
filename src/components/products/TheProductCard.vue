<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { type TProductUI } from '@/types/products/TProductUI'

defineProps<{
  product: TProductUI
  handler: Function
}>()
</script>

<template>
  <div :class="$style.card">
    <RouterLink :to="'/'">
      <img :class="$style.image" :src="product.imageUrl" :alt="product.name" />
      <div :class="$style.info">
        <h3 :class="$style.title">
          {{ product.name }}
        </h3>
        <p :class="$style.price">{{ product.price }} руб.</p>
      </div>
    </RouterLink>
    <AppButton :class="$style.button" @click="handler(product.id)"> Добавить в корзину </AppButton>
  </div>
</template>

<style module>
.image {
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.info {
  padding: 14px;
}

.title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 14px;
}

.price {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 6px;
}

.button {
  width: 100%;
}
</style>
