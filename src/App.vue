<script setup lang="ts">
import TheLayout from '@/components/layout/TheLayout.vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

cartStore.getCartProductsFromClientApi()
window.addEventListener('beforeunload', cartStore.setCartProductsToClientApi)
</script>

<template>
  <TheLayout />
</template>
