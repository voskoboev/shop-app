<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

defineProps<{
  items: IBreadcrumbsItem[]
}>()
</script>

<template>
  <nav aria-label="Навигационное меню по страницам сайта" :class="$style.breadcrumbs">
    <ol role="menu" itemscope itemtype="https://schema.org/BreadcrumbList" :class="$style.list">
      <li
        role="presentation"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
        :class="$style.listItem"
      >
        <meta itemprop="position" content="1" />
        <RouterLink to="/" role="menuitem" itemprop="item">
          <span itemprop="name">Главная</span>
        </RouterLink>
      </li>
      <li
        role="presentation"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
        v-for="(item, index) in items"
        :key="index"
        :class="$style.listItem"
      >
        <meta itemprop="position" :content="String(index + 2)" />
        <RouterLink role="menuitem" itemprop="item" :to="item.path">
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
    color: var(--color-accent);
    transition: 0.3s color ease;
  }
}

.listItem:not(:last-child)::after {
  position: absolute;
  top: 0;
  right: -18px;
  content: '\203A';
  color: var(--color-dark);
}
</style>
