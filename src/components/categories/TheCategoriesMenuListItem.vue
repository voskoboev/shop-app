<script lang="ts" setup>
import { computed } from 'vue'
import { type ICategory } from '@/types/categories/ICategory'
import { type IRouteCategory } from '@/types/router/IRouteCategory'

const props = defineProps<{
  category: ICategory
}>()

const categoryPath = computed((): IRouteCategory => {
  return {
    name: 'category',
    params: {
      id: props.category.id
    }
  }
})
</script>

<template>
  <li :class="$style.item">
    <RouterLink :to="categoryPath" :class="$style.link">
      <img :class="$style.image" :src="category.thumbnailUrl" :alt="category.name" />
      <h2 :class="$style.title" ref="categoryName">
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
