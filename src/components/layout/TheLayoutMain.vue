<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main :class="$style.main">
    <div class="container" :class="$style.mainContainer">
      <RouterView />
    </div>
  </main>
</template>

<style module>
.main {
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
