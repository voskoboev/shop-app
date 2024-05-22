<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCategoriesStore } from '@/stores/categoriesStore'
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import { type ICategory } from '@/types/categories/ICategory'

defineProps<{
  categories: ICategory[]
}>()

const categoriesStore = useCategoriesStore()

categoriesStore.changeMenuStateDependingOnWindowWidth()

onMounted(() => {
  categoriesStore.addWindowResizeListener()
})
</script>

<template>
  <div :class="$style.categoriesMenu">
    <button
      aria-label="Открыть меню категорий товаров"
      aria-controls="categoriesNav"
      :class="$style.buttonMenuOpen"
      :aria-expanded="categoriesStore.isMobileMenuOpen"
      @click="categoriesStore.openMobileMenu"
    >
      <div :class="$style.buttonMenuOpenDecorLine"></div>
    </button>
    <h2 :class="$style.title">Категории</h2>
    <nav
      id="categoriesNav"
      aria-label="Навигационное меню категорий товаров"
      v-if="categoriesStore.isMobileMenuOpen"
      :class="$style.nav"
    >
      <div :class="$style.wrapper">
        <button
          aria-label="Закрыть меню категорий товаров"
          :class="$style.buttonMenuClose"
          @click="categoriesStore.closeMobileMenu"
        ></button>
        <TheCategoriesMenuList :categories="categories" />
      </div>
    </nav>
  </div>
</template>

<style module>
.categoriesMenu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding-right: 20px;
  padding-bottom: 20px;
}

.buttonMenuOpen {
  display: none;
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  .buttonMenuOpen {
    display: block;
  }
}

.buttonMenuOpenDecorLine,
.buttonMenuOpenDecorLine::before,
.buttonMenuOpenDecorLine::after {
  height: 4px;
  background-color: var(--color-dark);
  border-radius: 2px;
}

.buttonMenuOpenDecorLine::before,
.buttonMenuOpenDecorLine::after {
  position: absolute;
  left: 0;
  content: '';
}

.buttonMenuOpenDecorLine {
  position: relative;
  width: 40px;
}

.buttonMenuOpenDecorLine::before {
  top: -10px;
  width: 40px;
}

.buttonMenuOpenDecorLine::after {
  width: 30px;
  bottom: -10px;
}

.nav {
  display: block;
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    inset: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.96);
  }
}

.wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.title {
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 600;
}

@media (max-width: 768px) {
  .title {
    display: none;
  }
}

.buttonMenuClose {
  position: absolute;
  top: 24px;
  right: 14px;
  display: none;
  width: 40px;
  height: 40px;
  border: 2px solid var(--color-dark);
  border-radius: 50%;
}

@media (max-width: 768px) {
  .buttonMenuClose {
    display: block;
  }
}

.buttonMenuClose::before,
.buttonMenuClose::after {
  position: absolute;
  top: 17px;
  left: 3px;
  width: 30px;
  height: 2px;
  content: '';
  background: var(--color-dark);
}

.buttonMenuClose::before {
  transform: rotate(45deg);
}

.buttonMenuClose::after {
  transform: rotate(-45deg);
}
</style>
