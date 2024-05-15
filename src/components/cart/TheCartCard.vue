<script lang="ts" setup>
import type AppButton from '../UI/AppButton.vue'

defineProps<{
  imageUrl: string
  name: string
  price: number
}>()

const deleteItem = () => {
  console.log('cart item deleted')
}
</script>

<template>
  <div :class="$style.card">
    <img :class="$style.image" :src="imageUrl" :alt="name" />
    <div :class="$style.infoWrapper">
      <h3 :class="$style.title">
        {{ name }}
      </h3>
      <p :class="$style.price">{{ price }} руб.</p>
      <div :class="$style.buttonWrapper">
        <AppButton @click="deleteItem">Удалить</AppButton>
      </div>
    </div>
  </div>
</template>

<style module>
.card {
  padding: 16px 24px;
  display: flex;
  border: 1px solid #dedede;
  border-radius: 20px;
}

@media (max-width: 576px) {
  .card {
    padding: 10px;
  }
}

.image {
  object-fit: cover;
  border-radius: 20px;
  width: 100px;
  height: 100px;
  flex-basis: 100px;
}

@media (max-width: 576px) {
  .image {
    width: 60px;
    height: 60px;
  }
}

.infoWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-left: 30px;
}

@media (max-width: 768px) {
  .infoWrapper {
    flex-direction: column;
    padding-left: 0px;
  }
}

.title {
  width: 30%;
}

.price {
  text-align: center;
  width: 30%;
}

.buttonWrapper {
  display: flex;
  justify-content: flex-end;
  width: 30%;
}

@media (max-width: 768px) {
  .buttonWrapper {
    justify-content: center;
  }
}
</style>
