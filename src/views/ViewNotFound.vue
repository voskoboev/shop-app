<script lang="ts" setup></script>

<template>
  <div :class="$style.notFound">
    <div :class="$style.notFoundInner">
      <h2 :class="$style.title">Страница не найдена</h2>
      <RouterLink to="/" :class="$style.link">Вернуться на главную</RouterLink>
    </div>
  </div>
</template>

<style module>
.notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.notFoundInner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid var(--color-accent);
  border-radius: var(--rounding);
}

.title {
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 600;
}

.link {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--color-success);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
