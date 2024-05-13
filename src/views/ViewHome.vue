<script lang="ts" setup>
import TheCategories from '@/components/categories/TheCategories.vue'
import TheProducts from '@/components/products/TheProducts.vue'
</script>

<template>
  <div>
    <div :class="$style.wrapper">
      <TheCategories :class="$style.leftPanel" />
      <TheProducts :class="$style.rightPanel" />
    </div>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
}

.leftPanel {
  width: 15%;
}

.rightPanel {
  width: 85%;
}
</style>
