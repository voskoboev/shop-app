<script lang="ts" setup>
import TheLayoutHeader from '@/components/layout/TheLayoutHeader.vue'
import TheLayoutMain from '@/components/layout/TheLayoutMain.vue'
import TheLayoutFooter from '@/components/layout/TheLayoutFooter.vue'
</script>

<template>
  <div :class="$style.layout">
    <TheLayoutHeader />
    <TheLayoutMain />
    <TheLayoutFooter />
  </div>
</template>

<style module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
