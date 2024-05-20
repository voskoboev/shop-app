<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import TheLayoutHeader from '@/components/layout/TheLayoutHeader.vue'
import TheLayoutMain from '@/components/layout/TheLayoutMain.vue'
import TheLayoutFooter from '@/components/layout/TheLayoutFooter.vue'

const cartStore = useCartStore()
</script>

<template>
  <div :class="$style.layout">
    <AppToast :visibilityStatus="cartStore.isProductAddedToCart">
      Товар добавлен в корзину
    </AppToast>
    <TheLayoutHeader />
    <TheLayoutMain />
    <TheLayoutFooter />
  </div>
</template>

<style module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
