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
  display: flex;
  flex-grow: 1;
}

.mainContainer {
  display: flex;
  flex-grow: 1;
  padding-top: 50px;
  padding-bottom: 100px;
}

@media (max-width: 768px) {
  .mainContainer {
    display: block;
  }
}
</style>
