<script lang="ts" setup>
defineProps<{
  visibilityStatus: boolean
}>()
</script>

<template>
  <div :class="[{ [$style.toastVisible]: visibilityStatus }, $style.toast]">
    <slot />
  </div>
</template>

<style module>
.toast {
  transition:
    0.2s opacity,
    visibility ease;
  opacity: 0;
  visibility: hidden;
  color: var(--color-bright);
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  font-size: 1.1em;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  background-color: var(--color-accent);
  border-radius: var(--rounding);
  width: 250px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 50;
}

.toastVisible {
  opacity: 1;
  visibility: visible;
  transition:
    0.2s opacity,
    visibility ease;
}
</style>
