<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { type TProductUI } from '@/types/products/TProductUI'

const props = defineProps<{
  product: TProductUI
  handler: Function
}>()

// interface IProductDetailsRouteParams {
//   name: string
//   params: {
//     id: string
//   }
// }

const individualProductPath = computed(() => {
  return {
    name: 'product-details',
    params: {
      id: props.product.id
    }
  }
})
</script>

<template>
  <div :class="$style.card">
    <RouterLink :to="individualProductPath">
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
  border-radius: var(--rounding);
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
