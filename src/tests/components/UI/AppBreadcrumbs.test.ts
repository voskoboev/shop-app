import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import ViewHome from '@/views/ViewHome.vue'

const routes = [{ path: '/', component: ViewHome }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const items = [
  {
    path: '/products/1',
    name: 'Product'
  },
  {
    path: '/categories/1',
    name: 'Category'
  }
]

describe('AppBreadcrumbs', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('Render component', async () => {
    const wrapper = mount(AppBreadcrumbs, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('Check items prop type', async () => {
    const wrapper = mount(AppBreadcrumbs, {
      global: {
        plugins: [router]
      },
      props: {
        items
      }
    })

    expect(wrapper.props('items')).toBeInstanceOf(Array)
  })

  it('Check rendered list items minimal amount', async () => {
    const wrapper = mount(AppBreadcrumbs, {
      global: {
        plugins: [router]
      },
      props: {
        items
      }
    })

    const listItems = wrapper.findAll('li')
    expect(listItems.length).toBeGreaterThanOrEqual(2)
  })
})
