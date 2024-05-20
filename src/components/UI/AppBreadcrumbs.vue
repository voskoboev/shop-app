<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

defineProps<{
  items: IBreadcrumbsItem[]
}>()
</script>

<template>
  <nav :class="$style.breadcrumbs">
    <ol :class="$style.list">
      <li :class="$style.listItem">
        <RouterLink to="/"> Главная </RouterLink>
      </li>
      <li v-for="(item, index) in items" :key="index" :class="$style.listItem">
        <RouterLink :to="item.path">
          {{ item.name }}
        </RouterLink>
      </li>
    </ol>
  </nav>
</template>

<style module>
.breadcrumbs {
  min-height: 50px;
  padding-bottom: 30px;
}

.list {
  display: flex;
  gap: 30px;
}

.listItem {
  position: relative;
  font-size: 1.1em;
}

@media (any-hover: hover) {
  .listItem:hover {
    transition: 0.3s color ease;
    color: var(--color-accent);
  }
}

.listItem:not(:last-child)::after {
  color: var(--color-dark);
  content: '›';
  position: absolute;
  right: -18px;
  top: 0;
}
</style>
