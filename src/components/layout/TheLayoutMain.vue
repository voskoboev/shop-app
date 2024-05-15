<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main :class="$style.main">
    <div class="container" :class="$style.mainContainer">
      <!-- <KeepAlive> -->
      <RouterView />
      <!-- </KeepAlive> -->
    </div>
  </main>
</template>

<style module>
.main {
  min-height: 600px;
  flex-grow: 1;
  display: flex;
}

.mainContainer {
  padding-top: 50px;
  padding-bottom: 100px;
  flex-grow: 1;
  display: flex;
}
</style>
