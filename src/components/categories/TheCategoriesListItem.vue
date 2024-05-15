<script lang="ts" setup>
import { type TCategoryUI } from '@/types/categories/TCategoryUI'

defineProps<{
  category: TCategoryUI
}>()
</script>

<template>
  <li :class="$style.item">
    <RouterLink to="/" :class="$style.link">
      <img :class="$style.image" :src="category.imageUrl" :alt="category.name" />
      <h2 :class="$style.title">
        {{ category.name }}
      </h2>
    </RouterLink>
  </li>
</template>

<style module>
.item {
  transition: 0.3s color ease;
}

@media (any-hover: hover) {
  .item:hover {
    color: var(--color-accent);
    transition: 0.3s color ease;
  }
}

.title {
  font-size: 1.2em;
}

.link {
  display: flex;
  align-items: center;
  gap: 20px;
}

.image {
  width: 50px;
  height: 50px;
}
</style>
