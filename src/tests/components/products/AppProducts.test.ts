import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AppProducts from '@/components/products/AppProducts.vue'
import TheProductsList from '@/components/products/TheProductsList.vue'
import { type IProduct } from '@/types/products/IProduct'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

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

  let wrapper: TVueWrapperInstance<typeof AppProducts>

  beforeEach(() => {
    wrapper = mount(AppProducts, {
      global: {
        stubs: ['router-link']
      },
      props: {
        products: mockProducts,
        cardButtonHandler: mockCardButtonHandler
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks products and cardButtonHandler props with valid data', () => {
    expect(wrapper.props('products')).toEqual(mockProducts)
    expect(wrapper.props('cardButtonHandler')).toEqual(mockCardButtonHandler)
  })

  it('Renders the products list child component', () => {
    const productsList = wrapper.findComponent(TheProductsList)

    expect(productsList.exists()).toBe(true)
  })
})
