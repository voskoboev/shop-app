<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import IconCart from '@/components/icons/IconCart.vue'

const cartStore = useCartStore()
</script>

<template>
  <header :class="$style.header">
    <div class="container" :class="$style.headerContainer">
      <h1 :class="$style.title">
        <RouterLink to="/" aria-label="Главная страница" :class="$style.titleLink">
          Lightspeed
        </RouterLink>
      </h1>
      <RouterLink
        to="/cart"
        aria-label="Корзина покупок"
        :class="$style.cartLink"
        :data-product-amount="cartStore.cartProductsAmount"
      >
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

.cartLink {
  position: relative;
}

.cartLink:hover {
  opacity: 0.8;
}

.cartLink::after {
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  content: attr(data-product-amount);
  background-color: rgb(206, 9, 9);
  border-radius: 50%;
  color: var(--color-bright);
}

.cartIcon {
  width: 40px;
  height: 40px;
}
</style>
