import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import TheProductsList from '@/components/products/TheProductsList.vue'
import TheProductsListItem from '@/components/products/TheProductsListItem.vue'
import ViewProductDetails from '@/views/ViewProductDetails.vue'
import { type RouteRecordRaw } from 'vue-router'
import { type IProduct } from '@/types/products/IProduct'

const routes: RouteRecordRaw[] = [
  {
    path: '/product/:id',
    name: 'product-details',
    component: ViewProductDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const mockProducts: IProduct[] = [
  {
    id: 1,
    name: 'Name 1',
    price: 1,
    imageUrl: 'imageUrl 1',
    thumbnailUrl: 'thumbnailUrl 1',
    description: 'description 1'
  },
  {
    id: 2,
    name: 'Name 2',
    price: 2,
    imageUrl: 'imageUrl 2',
    thumbnailUrl: 'thumbnailUrl 2',
    description: 'description 2'
  }
]

const mockCardButtonHandler = vi.fn()

describe('TheProductsList', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(TheProductsList, {
    global: {
      plugins: [router]
    },
    props: {
      products: mockProducts,
      cardButtonHandler: mockCardButtonHandler
    }
  })
  const productsListItems = wrapper.findAllComponents(TheProductsListItem)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Check component props', () => {
    expect(wrapper.props('products')).toEqual(mockProducts)
    expect(wrapper.props('cardButtonHandler')).toEqual(mockCardButtonHandler)
  })

  it('Renders correct number of products list items child components', () => {
    expect(productsListItems).toHaveLength(2)
  })

  it('Renders products list items with valid data', () => {
    expect(productsListItems[0].props('product')).toEqual(mockProducts[0])
    expect(productsListItems[0].props('cardButtonHandler')).toEqual(mockCardButtonHandler)

    expect(productsListItems[1].props('product')).toEqual(mockProducts[1])
    expect(productsListItems[1].props('cardButtonHandler')).toEqual(mockCardButtonHandler)
  })
})
