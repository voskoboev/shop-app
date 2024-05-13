<script lang="ts" setup>
import { RouterLink } from 'vue-router'

defineProps<{
  linkUrl: string
  imageUrl: string
  name: string
  price: number
}>()
</script>

<template>
  <div :class="$style.card">
    <RouterLink :to="linkUrl">
      <img :class="$style.image" :src="imageUrl" :alt="name" />
      <div :class="$style.info">
        <h3 :class="$style.title">
          {{ name }}
        </h3>
        <p :class="$style.price">{{ price }} руб.</p>
      </div>
    </RouterLink>
    <slot />
  </div>
</template>

<style module>
.image {
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.info {
  padding: 14px;
}

.title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 14px;
}

.price {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 6px;
}
</style>
