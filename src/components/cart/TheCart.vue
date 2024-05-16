<script lang="ts" setup>
import TheCartList from '@/components/cart/TheCartList.vue'
</script>

<template>
  <div :class="$style.cart">
    <h2 :class="$style.title">Корзина</h2>
    <TheCartList />
  </div>
</template>

<style module>
.cart {
  width: 100%;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>
