import '../node_modules/normalize.css/normalize.css'
import '@/assets/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import AppButton from '@/components/UI/AppButton.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import AppPlaceholder from '@/components/UI/AppPlaceholder.vue'
import AppToast from '@/components/UI/AppToast.vue'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('AppBreadcrumbs', AppBreadcrumbs)
app.component('AppButton', AppButton)
app.component('AppPlaceholder', AppPlaceholder)
app.component('AppSpinner', AppSpinner)
app.component('AppToast', AppToast)

app.mount('#app')

// setBeforeEachGuards()
// import router from '@/router'

// import { useCategoriesStore } from '@/stores/categoriesStore'

// const categoriesStore = useCategoriesStore()

// export const setRouterBeforeEachGuards = () => {
//   router.beforeEach((_, from, next) => {
//     if (from.path === '/') {
//       categoriesStore.closeMobileMenu()
//     }
//     //
//     next()
//   })
// }
