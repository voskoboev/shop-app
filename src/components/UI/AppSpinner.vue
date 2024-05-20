<template>
  <div :class="$style.spinner"></div>
</template>

<style module>
.spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
  background: #dedede;
  box-shadow:
    -24px 0 #dedede,
    24px 0 #dedede;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;
}

@keyframes shadowPulse {
  33% {
    background: #dedede;
    box-shadow:
      -24px 0 var(--color-accent),
      24px 0 #dedede;
  }
  66% {
    background: var(--color-accent);
    box-shadow:
      -24px 0 #dedede,
      24px 0 #dedede;
  }
  100% {
    background: #dedede;
    box-shadow:
      -24px 0 #dedede,
      24px 0 var(--color-accent);
  }
}
</style>
