<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import AppButton from '../UI/AppButton.vue'
import { type IProduct } from '@/types/products/IProduct'

const cartStore = useCartStore()

defineProps<{
  cartProduct: IProduct
}>()
</script>

<template>
  <li>
    <article :class="$style.card">
      <div>
        <img
          loading="lazy"
          :class="$style.image"
          :src="cartProduct.thumbnailUrl"
          :alt="cartProduct.name"
        />
      </div>
      <div :class="$style.info">
        <h3 :class="$style.title">
          {{ cartProduct.name }}
        </h3>
        <p :class="$style.price">{{ cartProduct.price }} &#8381;</p>
        <div :class="$style.buttonWrapper">
          <AppButton
            aria-label="Удалить товар из корзины"
            @click="cartStore.deleteProductFromCart(cartProduct.id)"
            >Удалить</AppButton
          >
        </div>
      </div>
    </article>
  </li>
</template>

<style module>
.card {
  display: flex;
  padding: 16px 24px;
  border: 1px solid #dedede;
  border-radius: var(--rounding);
}

@media (max-width: 576px) {
  .card {
    padding: 10px;
  }
}

.image {
  width: 100px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: var(--rounding);
}

@media (max-width: 576px) {
  .image {
    width: 80px;
  }
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding-left: 30px;
}

@media (max-width: 768px) {
  .info {
    flex-direction: column;
    padding-left: 10px;
  }
}

.title {
  width: 30%;
  text-align: center;
}

@media (max-width: 576px) {
  .title {
    width: 100%;
  }
}

.price {
  width: 30%;
  text-align: center;
}

@media (max-width: 576px) {
  .price {
    width: 100%;
  }
}

.buttonWrapper {
  display: flex;
  justify-content: flex-end;
  width: 30%;
}

@media (max-width: 768px) {
  .buttonWrapper {
    justify-content: center;
    width: 100%;
  }
}
</style>
