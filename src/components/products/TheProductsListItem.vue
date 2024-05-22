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

const buttonAriaLabel = computed(() => `Добавить в корзину товар ${props.product.name}`)
</script>

<template>
  <li>
    <article itemscope itemtype="https://schema.org/Product">
      <div :class="$style.card">
        <RouterLink aria-labelledby="productName productPrice" :to="individualProductPath">
          <img itemprop="image" :class="$style.image" :src="product.imageUrl" :alt="product.name" />
          <div :class="$style.info">
            <h3 id="productName" itemprop="name" :class="$style.title">
              {{ product.name }}
            </h3>
            <p
              id="productPrice"
              itemprop="offers"
              itemscope
              itemtype="https://schema.org/Offer"
              :class="$style.price"
            >
              <span itemprop="price" :content="product.price">{{ product.price }}</span>
              <span itemprop="priceCurrency" content="RUB">&#8381;</span>
            </p>
          </div>
        </RouterLink>
        <AppButton
          itemprop="potentialAction"
          itemscope
          itemtype="https://schema.org/BuyAction"
          :class="$style.button"
          :aria-label="buttonAriaLabel"
          @click="cartStore.addProductToCart(product.id)"
        >
          <span aria-hidden="true" itemprop="name"> Добавить в корзину </span>
        </AppButton>
      </div>
    </article>
  </li>
</template>

<style module>
.image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--rounding);
}

.info {
  padding: 14px;
}

.title {
  margin-bottom: 14px;
  font-size: 1.1em;
  font-weight: 600;
}

.price {
  margin-bottom: 6px;
  font-size: 1.5em;
  font-weight: 700;
}

.button {
  width: 100%;
}
</style>
