<script lang="ts" setup>
import TheCart from '@/components/cart/TheCart.vue'
import { useCartStore } from '@/stores/cartStore'
import type AppPlaceholder from '@/components/UI/AppPlaceholder.vue'
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
  <div :class="$style.wrapper">
    <AppBreadcrumbs :items="breadcrumbsItems" />
    <TheCart v-if="cartStore.areCartProductsAvailable" />
    <AppPlaceholder v-else> Корзина пуста </AppPlaceholder>
  </div>
</template>

<style module>
.wrapper {
  width: 100%;
}
</style>
