<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import IconCart from '@/components/icons/IconCart.vue'
</script>

<template>
  <header :class="$style.header">
    <div class="container" :class="$style.headerContainer">
      <h1 :class="$style.title">
        <RouterLink to="/" :class="$style.titleLink" aria-label="Главная страница">
          Lightspeed
        </RouterLink>
      </h1>
      <RouterLink to="/products">Products</RouterLink>

      <RouterLink to="/cart" :class="$style.cartLink" aria-label="Корзины покупок">
        <IconCart :class="$style.cartIcon" />
      </RouterLink>
    </div>
  </header>
</template>

<style module>
.header {
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0 1px 6px 0 rgba(34, 60, 80, 0.2);
}

.headerContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.titleLink {
  font-size: 2em;
  font-weight: 700;
}

.title {
  color: var(--color-accent);
}

.cartLink:hover {
  opacity: 0.8;
}

.cartIcon {
  width: 40px;
  height: 40px;
}
</style>
