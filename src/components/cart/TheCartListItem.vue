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
      <img :class="$style.image" :src="cartProduct.thumbnailUrl" :alt="cartProduct.name" />
      <div :class="$style.infoWrapper">
        <h3 :class="$style.title">
          {{ cartProduct.name }}
        </h3>
        <p :class="$style.price">{{ cartProduct.price }} руб.</p>
        <div :class="$style.buttonWrapper">
          <AppButton @click="cartStore.deleteProductFromCart(cartProduct.id)">Удалить</AppButton>
        </div>
      </div>
    </article>
  </li>
</template>

<style module>
.card {
  padding: 16px 24px;
  display: flex;
  border: 1px solid #dedede;
  border-radius: var(--rounding);
}

@media (max-width: 576px) {
  .card {
    padding: 10px;
  }
}

.image {
  object-fit: cover;
  border-radius: var(--rounding);
  width: 100px;
  height: 100px;
  flex-basis: 100px;
}

@media (max-width: 576px) {
  .image {
    width: 60px;
    height: 60px;
  }
}

.infoWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-left: 30px;
}

@media (max-width: 768px) {
  .infoWrapper {
    flex-direction: column;
    padding-left: 0;
  }
}

.title {
  width: 30%;
}

.price {
  text-align: center;
  width: 30%;
}

.buttonWrapper {
  display: flex;
  justify-content: flex-end;
  width: 30%;
}

@media (max-width: 768px) {
  .buttonWrapper {
    justify-content: center;
  }
}
</style>
