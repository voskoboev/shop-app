<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { type IProduct } from '@/types/products/IProduct'
import { type IRouteProductDetails } from '@/types/router/IRouteProductDetails'

const props = defineProps<{
  product: IProduct
}>()

const cartStore = useCartStore()

const individualProductPath = computed((): IRouteProductDetails => {
  return {
    name: 'product-details',
    params: {
      id: props.product.id
    }
  }
})
</script>

<template>
  <li>
    <article itemscope itemtype="https://schema.org/Product">
      <div :class="$style.card">
        <RouterLink :to="individualProductPath">
          <img :class="$style.image" :src="product.imageUrl" :alt="product.name" itemprop="image" />
          <div :class="$style.info">
            <h3 :class="$style.title" itemprop="name">
              {{ product.name }}
            </h3>
            <p
              :class="$style.price"
              itemprop="offers"
              itemscope
              itemtype="https://schema.org/Offer"
            >
              <span itemprop="price" :content="product.price">{{ product.price }}</span> <span itemprop="priceCurrency" content="RUB">&#8381;</span>
            </p>
          </div>
        </RouterLink>
        <AppButton
          :class="$style.button"
          @click="cartStore.addProductToCart(product.id)"
          itemprop="potentialAction"
          itemscope
          itemtype="https://schema.org/BuyAction"
        >
          <span itemprop="name"> Добавить в корзину </span>
        </AppButton>
      </div>
    </article>
  </li>
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
