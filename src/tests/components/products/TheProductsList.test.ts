import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import TheProductsList from '@/components/products/TheProductsList.vue'
import TheProductsListItem from '@/components/products/TheProductsListItem.vue'
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

describe('TheProductsList', () => {
  const mockCardButtonHandler = vi.fn()

  let wrapper: TVueWrapperInstance<typeof TheProductsList>

  beforeEach(() => {
    wrapper = mount(TheProductsList, {
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

  it('Renders the correct number of products list items child components', () => {
    const productsListItems = wrapper.findAllComponents(TheProductsListItem)

    expect(productsListItems).toHaveLength(2)
  })

  it('Renders products list items with valid data', () => {
    const productsListItems = wrapper.findAllComponents(TheProductsListItem)

    expect(productsListItems[0].props('product')).toEqual(mockProducts[0])
    expect(productsListItems[0].props('cardButtonHandler')).toEqual(mockCardButtonHandler)
    expect(productsListItems[1].props('product')).toEqual(mockProducts[1])
    expect(productsListItems[1].props('cardButtonHandler')).toEqual(mockCardButtonHandler)
  })
})
