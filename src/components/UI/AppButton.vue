<template>
  <button :class="$style.button">
    <slot>Купить</slot>
  </button>
</template>

<style module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-bright);
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 14px;
  background-color: var(--color-accent);
  font-size: 1.2em;
  padding: 0.6em 2em;
  line-height: 110%;
}

@media (any-hover: hover) {
  .button:hover {
    opacity: 0.9;
  }
}
</style>
