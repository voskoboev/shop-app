<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/categoriesStore'
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import { type ICategory } from '@/types/categories/ICategory'

defineProps<{
  categories: ICategory[]
}>()

const categoriesStore = useCategoriesStore()

categoriesStore.changeMenuStateDependingOnWindowWidth()
categoriesStore.addWindowResizeListener()
categoriesStore.createStopScrollSelector()
</script>

<template>
  <div :class="$style.categoriesMenu">
    <button
      :class="$style.buttonOpenMobile"
      @click="categoriesStore.openMobileMenu"
      aria-label="Открыть меню категорий товаров"
      aria-controls="categoriesNav"
      :aria-expanded="categoriesStore.isMobileMenuOpen"
    >
      <div :class="$style.buttonOpenDecorLine"></div>
    </button>
    <h2 :class="$style.title">Категории</h2>
    <nav
      id="categoriesNav"
      :class="$style.nav"
      v-if="categoriesStore.isMobileMenuOpen"
      aria-label="Навигационное меню категорий товаров"
    >
      <div :class="$style.wrapper">
        <button
          :class="$style.buttonCloseMobile"
          @click="categoriesStore.closeMobileMenu"
          aria-label="Закрыть меню категорий товаров"
        ></button>
        <TheCategoriesMenuList :categories="categories" />
      </div>
    </nav>
  </div>
</template>

<style module>
.categoriesMenu {
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}

.buttonOpenMobile {
  display: none;
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  .buttonOpenMobile {
    display: block;
  }
}

.buttonOpenDecorLine,
.buttonOpenDecorLine::before,
.buttonOpenDecorLine::after {
  height: 4px;
  background: var(--color-dark);
  border-radius: 2px;
}

.buttonOpenDecorLine::before,
.buttonOpenDecorLine::after {
  position: absolute;
  content: '';
  left: 0;
}

.buttonOpenDecorLine {
  position: relative;
  width: 40px;
}

.buttonOpenDecorLine::before {
  width: 40px;
  top: -10px;
}

.buttonOpenDecorLine::after {
  bottom: -10px;
  width: 30px;
}

.nav {
  display: block;
}

@media (max-width: 768px) {
  .nav {
    z-index: 100;
    position: fixed;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.96);
  }
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .title {
    display: none;
  }
}

.buttonCloseMobile {
  position: relative;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 24px;
  right: 14px;
  border-radius: 50%;
  border: 2px solid var(--color-dark);
  display: none;
}

@media (max-width: 768px) {
  .buttonCloseMobile {
    display: block;
  }
}

/* @media (max-width: 768px) {
  .buttonCloseMobile {
  
  }
} */

.buttonCloseMobile::before,
.buttonCloseMobile::after {
  position: absolute;
  top: 17px;
  left: 3px;
  content: '';
  width: 30px;
  height: 2px;
  background: var(--color-dark);
}

.buttonCloseMobile::before {
  transform: rotate(45deg);
}

.buttonCloseMobile::after {
  transform: rotate(-45deg);
}
</style>
