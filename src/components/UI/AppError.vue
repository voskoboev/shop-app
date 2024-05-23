<template>
  <div
    tabindex="0"
    role="alert"
    aria-live="assertive"
    aria-labelledby="errorInner"
    :class="$style.error"
  >
    <div id="errorInner" :class="$style.errorInner">
      <slot>Ошибка</slot>
    </div>
  </div>
</template>

<style module>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
}

.errorInner {
  min-width: 120px;
  max-width: 320px;
  padding: 10px;
  border: 1px solid var(--color-danger);
  border-radius: var(--rounding);
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
}
</style>
