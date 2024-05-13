declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// import { defineStore } from 'pinia'

// // Определение хранилища
// export const useStore = defineStore({
//   id: 'main'
//   // Определение состояния и методов хранилища
// })

// // Глобальное объявление типов для Pinia
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $store: ReturnType<typeof useStore>
//   }
// }
