<script lang="ts" setup></script>

<template>
  <footer :class="$style.footer">
    <div class="container">
      <p :class="$style.text">Все права защищены. &copy; Lightspeed</p>
    </div>
  </footer>
</template>

<style module>
.footer {
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: 0 -1px 6px 0 rgba(34, 60, 80, 0.2);
}

.text {
  text-align: center;
}
</style>
