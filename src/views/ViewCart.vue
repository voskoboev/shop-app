<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import TheCart from '@/components/cart/TheCart.vue'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

const cartStore = useCartStore()

const breadcrumbsItems: IBreadcrumbsItem[] = [
  {
    name: 'Корзина',
    path: '/cart'
  }
]
</script>

<template>
  <section :class="$style.cart">
    <AppToast :visibilityStatus="cartStore.isOrderPlaced"> Заказ оформлен </AppToast>
    <div :class="$style.breadcrumbsWrapper">
      <AppBreadcrumbs :items="breadcrumbsItems" />
    </div>
    <div :class="$style.buttonBuyWrapper">
      <AppButton :disabled="!cartStore.areCartProductsAvailable" @click="cartStore.placeOrder">
        Сделать заказ
      </AppButton>
    </div>
    <div :class="$style.cartWrapper">
      <TheCart v-if="cartStore.areCartProductsAvailable" />
      <AppPlaceholder v-else> Корзина пуста </AppPlaceholder>
    </div>
  </section>
</template>

<style module>
.cart {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.cartWrapper {
  width: 100%;
  height: 100%;
}

.buttonBuyWrapper {
  margin-bottom: 30px;
}
</style>
