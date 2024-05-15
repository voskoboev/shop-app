<script lang="ts" setup>
import TheCategories from '@/components/categories/TheCategories.vue'
import TheProducts from '@/components/products/TheProducts.vue'
</script>

<template>
  <div :class="$style.homeContainer">
    <TheCategories :class="$style.leftPanel" />
    <TheProducts :class="$style.rightPanel" />
  </div>
</template>

<style module>
.homeContainer {
  display: flex;
}

.leftPanel {
  flex-basis: 250px;
}

.rightPanel {
  flex-shrink: 1;
}
</style>
