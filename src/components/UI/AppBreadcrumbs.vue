<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

defineProps<{
  items: IBreadcrumbsItem[]
}>()
</script>

<template>
  <nav :class="$style.breadcrumbs">
    <ol :class="$style.list" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        :class="$style.listItem"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <meta itemprop="position" content="1" />
        <RouterLink to="/" itemprop="item"> <span itemprop="name">Главная</span> </RouterLink>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="$style.listItem"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <meta itemprop="position" :content="String(index + 2)" />
        <RouterLink :to="item.path" itemprop="item">
          <span itemprop="name">
            {{ item.name }}
          </span>
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
  /* content: '›'; */
  content: '\203A';
  position: absolute;
  right: -18px;
  top: 0;
}
</style>
