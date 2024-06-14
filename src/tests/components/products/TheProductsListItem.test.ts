import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RouterLink } from 'vue-router'
import TheProductsListItem from '@/components/products/TheProductsListItem.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { type IProduct } from '@/types/products/IProduct'
import { type IRouteProductDetails } from '@/types/router/IRouteProductDetails'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const mockProduct: IProduct = {
  id: 1,
  name: 'Name 1',
  price: 1,
  imageUrl: 'imageUrl 1',
  thumbnailUrl: 'thumbnailUrl 1',
  description: 'description 1'
}
const mockRoute: IRouteProductDetails = {
  name: 'product-details',
  params: {
    id: 1
  }
}

describe('TheProductsListItem', () => {
  const mockCardButtonHandler = vi.fn()

  let wrapper: TVueWrapperInstance<typeof TheProductsListItem>

  beforeEach(() => {
    wrapper = mount(TheProductsListItem, {
      global: {
        components: {
          RouterLink
        },
        stubs: ['router-link']
      },
      components: {
        AppButton
      },
      props: {
        product: mockProduct,
        cardButtonHandler: mockCardButtonHandler
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks product and cardButtonHandler props with valid data', () => {
    expect(wrapper.props('product')).toEqual(mockProduct)
    expect(wrapper.props('cardButtonHandler')).toEqual(mockCardButtonHandler)
  })

  it('Renders the router link child component', () => {
    const routerLink = wrapper.findComponent(RouterLink)

    expect(routerLink.exists()).toBe(true)
  })

  it('Renders the router link child component with valid data', () => {
    const routerLink = wrapper.findComponent(RouterLink)

    expect(routerLink.props('to')).toEqual(mockRoute)
  })

  it('Renders the button child component', () => {
    const button = wrapper.findComponent(AppButton)

    expect(button.exists()).toBe(true)
  })

  it('Triggers the cardButtonHandler method on click', async () => {
    const button = wrapper.findComponent(AppButton)

    await button.trigger('click')

    expect(mockCardButtonHandler).toHaveBeenCalledWith(mockProduct.id)
  })
})
