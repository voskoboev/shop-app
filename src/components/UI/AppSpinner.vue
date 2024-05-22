<template>
  <div :class="$style.spinner"></div>
</template>

<style module>
.spinner {
  position: relative;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #dedede;
  box-shadow:
    -24px 0 #dedede,
    24px 0 #dedede;
  animation: shadowPulse 2s linear infinite;
}

@keyframes shadowPulse {
  33% {
    background-color: #dedede;
    box-shadow:
      -24px 0 var(--color-accent),
      24px 0 #dedede;
  }

  66% {
    background-color: var(--color-accent);
    box-shadow:
      -24px 0 #dedede,
      24px 0 #dedede;
  }

  100% {
    background-color: #dedede;
    box-shadow:
      -24px 0 #dedede,
      24px 0 var(--color-accent);
  }
}
</style>
