<script lang="ts" setup>
import { computed } from 'vue'
import { type ICategory } from '@/types/categories/ICategory'
import { type IRouteCategory } from '@/types/router/IRouteCategory'

const props = defineProps<{
  category: ICategory
  microMarkupListPosition: number
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
  <li
    role="presentation"
    itemprop="itemListElement"
    itemscope
    itemtype="https://schema.org/ListItem"
    :class="$style.menuItem"
  >
    <meta itemprop="position" :content="String(microMarkupListPosition)" />
    <RouterLink
      role="menuitem"
      aria-labelledby="categoryName"
      itemprop="item"
      :to="categoryPath"
      :class="$style.link"
    >
      <img
        itemprop="image"
        :class="$style.image"
        :src="category.thumbnailUrl"
        :alt="category.name"
      />
      <p id="categoryName" itemprop="name" :class="$style.title">
        {{ category.name }}
      </p>
    </RouterLink>
  </li>
</template>

<style module>
.menuItem {
  transition: 0.3s color ease;
}

@media (any-hover: hover) {
  .menuItem:hover {
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
  object-fit: cover;
  border-radius: 14px;
}
</style>
