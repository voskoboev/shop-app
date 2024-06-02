import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import AppProducts from '@/components/products/AppProducts.vue'
import TheProductsList from '@/components/products/TheProductsList.vue'
import { type IProduct } from '@/types/products/IProduct'

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

describe('AppProducts', () => {
  const mockCardButtonHandler = vi.fn()

  const wrapper = mount(AppProducts, {
    global: {
      stubs: ['router-link']
    },
    props: {
      products: mockProducts,
      cardButtonHandler: mockCardButtonHandler
    }
  })
  const productsList = wrapper.findComponent(TheProductsList)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks products and cardButtonHandler props with valid data', () => {
    expect(wrapper.props('products')).toEqual(mockProducts)
    expect(wrapper.props('cardButtonHandler')).toEqual(mockCardButtonHandler)
  })

  it('Renders products list child component', () => {
    expect(productsList.exists()).toBe(true)
  })
})
