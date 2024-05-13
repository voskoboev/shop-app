<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main :class="$style.main">
    <div class="container">
      <!-- <KeepAlive> -->
      <RouterView />
      <!-- </KeepAlive> -->
    </div>
  </main>
</template>

<style module>
.main {
  padding-top: 50px;
  padding-bottom: 100px;
  min-height: 600px;
  flex-grow: 1;
}
</style>
