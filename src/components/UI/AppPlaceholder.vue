<template>
  <div
    :class="$style.placeholder"
    tabindex="0"
    role="status"
    aria-live="polite"
    aria-labelledby="placeholderInner"
  >
    <div id="placeholderInner" :class="$style.placeholderInner">
      <slot />
    </div>
  </div>
</template>

<style module>
.placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholderInner {
  text-align: center;
  min-width: 250px;
  font-size: 1.5em;
  font-weight: 600;
  border-radius: var(--rounding);
  border: 1px solid var(--color-accent);
  padding: 14px;
}
</style>
