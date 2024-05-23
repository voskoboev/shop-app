<template>
  <div
    tabindex="0"
    role="status"
    aria-live="polite"
    aria-labelledby="placeholderInner"
    :class="$style.placeholder"
  >
    <div id="placeholderInner" :class="$style.placeholderInner">
      <slot />
    </div>
  </div>
</template>

<style module>
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.placeholderInner {
  min-width: 200px;
  max-width: 320px;
  padding: 10px;
  border: 1px solid var(--color-accent);
  border-radius: var(--rounding);
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
}
</style>
