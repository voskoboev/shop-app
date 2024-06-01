import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { RouterView, createRouter, createWebHistory } from 'vue-router'
import TheLayoutMain from '@/components/layout/TheLayoutMain.vue'
import ViewHome from '@/views/ViewHome.vue'
import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{ path: '/', component: ViewHome }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('TheLayoutMain', async () => {
  router.push('/')
  await router.isReady()

  setActivePinia(createPinia())

  const wrapper = mount(TheLayoutMain, {
    global: {
      plugins: [router]
    }
  })
  const routerView = wrapper.findComponent(RouterView)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders router view child component', () => {
    expect(routerView.exists()).toBe(true)
  })
})
