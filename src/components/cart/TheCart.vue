<script lang="ts" setup>
import TheCartList from '@/components/cart/TheCartList.vue'
</script>

<template>
  <section :class="$style.cart">
    <div :class="$style.cartContainer">
      <TheCartList />
    </div>
  </section>
</template>

<style module>
.cart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
}

.cartContainer {
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
