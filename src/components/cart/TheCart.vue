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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.title {
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 600;
}

.cartContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
}
</style>
