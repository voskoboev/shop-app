<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import TheLayout from '@/components/layout/TheLayout.vue'

const cartStore = useCartStore()

cartStore.getCartProductsFromClientApi()
window.addEventListener('beforeunload', cartStore.setCartProductsToClientApi)
</script>

<template>
  <TheLayout />
</template>
