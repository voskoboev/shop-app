import '../node_modules/normalize.css/normalize.css'
import '@/assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import AppProductCard from '@/components/AppProductCard.vue'
import AppButton from '@/components/UI/AppButton.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('AppProductCard', AppProductCard)
app.component('AppButton', AppButton)
app.component('AppSpinner', AppSpinner)

app.mount('#app')
