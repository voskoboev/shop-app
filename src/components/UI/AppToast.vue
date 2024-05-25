<script lang="ts" setup>
defineProps<{
  visibilityStatus: boolean
}>()
</script>

<template>
  <div :class="[$style.toast, { [$style.toastVisible]: visibilityStatus }]">
    <slot />
  </div>
</template>

<style module>
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  visibility: hidden;
  opacity: 0;
  width: 250px;
  padding: 14px;
  border-radius: var(--rounding);
  background-color: var(--color-success);
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  font-size: 1.1em;
  color: var(--color-bright);
  text-align: center;
  transform: translate(-50%);
  transition:
    0.2s opacity,
    visibility ease;
}

.toastVisible {
  visibility: visible;
  opacity: 1;
  transition:
    0.2s opacity,
    visibility ease;
}
</style>
