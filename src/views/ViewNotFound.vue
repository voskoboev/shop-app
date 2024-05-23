<template>
  <div :class="$style.notFound">
    <AppPlaceholder>
      <h2 :class="$style.title">Страница не найдена</h2>
      <RouterLink to="/" :class="$style.link">Вернуться на главную</RouterLink>
    </AppPlaceholder>
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

.title {
  margin-bottom: 20px;
}

.link {
  font-size: 20px;
  color: var(--color-success);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
