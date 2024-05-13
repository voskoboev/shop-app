<script lang="ts" setup>
import { useProductsStore } from '@/stores/productsStore'

const store = useProductsStore()
const products = store.products

console.log('cat products', store.products)
</script>

<template>
  <section :class="$style.categoryProducts">
    <div :class="$style.container">
      <ul :class="$style.list">
        <li v-for="product in products" :key="product.id">
          <article>
            <AppProductCard
              :linkUrl="'/'"
              :imageUrl="product.imageUrl"
              :name="product.name"
              :price="product.price"
            >
              <AppButton :class="$style.button"> Добавить в корзину </AppButton>
            </AppProductCard>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style module>
.list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 40px;
}
</style>
