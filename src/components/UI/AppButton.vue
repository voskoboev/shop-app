<template>
  <button :class="$style.button">
    <slot>Приобрести товар</slot>
  </button>
</template>

<style module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6em 2em;
  border-radius: 14px;
  background-color: var(--color-accent);
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-bright);
}

@media (any-hover: hover) {
  .button:hover {
    opacity: 0.9;
  }
}

.button:disabled {
  background-color: var(--color-disabled);
  cursor: default;
}

.button:disabled:hover {
  opacity: 1;
}
</style>
