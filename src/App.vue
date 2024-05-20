<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import TheLayout from '@/components/layout/TheLayout.vue'

const cartStore = useCartStore()

cartStore.getCartProductsFromClientApi()
window.addEventListener('beforeunload', cartStore.setCartProductsToClientApi)
</script>

<template>
  <TheLayout />
</template>
