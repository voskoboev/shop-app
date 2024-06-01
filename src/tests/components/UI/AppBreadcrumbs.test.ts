import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import ViewHome from '@/views/ViewHome.vue'
import { type RouteRecordRaw } from 'vue-router'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

const routes: RouteRecordRaw[] = [{ path: '/', component: ViewHome }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const mockItems: IBreadcrumbsItem[] = [
  {
    path: '/products/1',
    name: 'Product'
  },
  {
    path: '/categories/1',
    name: 'Category'
  }
]

describe('AppBreadcrumbs', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(AppBreadcrumbs, {
    global: {
      plugins: [router]
    },
    props: {
      items: mockItems
    }
  })
  const routerLinks = wrapper.findAllComponents(RouterLink)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders correct number of router links', () => {
    expect(routerLinks).toHaveLength(3)
  })

  it('Renders router links with valid data', () => {
    expect(routerLinks[0].props('to')).toBe('/')
    expect(routerLinks[1].props('to')).toBe(mockItems[0].path)
    expect(routerLinks[2].props('to')).toBe(mockItems[1].path)
  })
})
