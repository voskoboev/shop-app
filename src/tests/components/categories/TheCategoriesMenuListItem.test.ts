import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import TheCategoriesMenuListItem from '@/components/categories/TheCategoriesMenuListItem.vue'
import ViewCategory from '@/views/ViewCategory.vue'
import { type RouteRecordRaw } from 'vue-router'
import { type ICategory } from '@/types/categories/ICategory'
import { type IRouteCategory } from '@/types/router/IRouteCategory'

const routes: RouteRecordRaw[] = [
  { path: '/category/:id', name: 'category', component: ViewCategory }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const mockCategory: ICategory = {
  id: 1,
  name: 'Name',
  thumbnailUrl: 'thumbnailUrl'
}
const mockMicroMarkupListPosition = 1

const mockRoute: IRouteCategory = {
  name: 'category',
  params: {
    id: 1
  }
}

describe('TheCategoriesMenuListItem', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(TheCategoriesMenuListItem, {
    global: {
      plugins: [router]
    },
    props: {
      category: mockCategory,
      microMarkupListPosition: mockMicroMarkupListPosition
    }
  })
  const routerLink = wrapper.findComponent(RouterLink)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders category and microMarkupListPosition props with valid data', () => {
    expect(wrapper.props('category')).toEqual(mockCategory)
    expect(wrapper.props('microMarkupListPosition')).toEqual(mockMicroMarkupListPosition)
  })

  it('Renders router link child component', () => {
    expect(routerLink.exists()).toBe(true)
  })

  it('Renders router link child component with valid data', () => {
    expect(routerLink.props('to')).toEqual(mockRoute)
  })
})
