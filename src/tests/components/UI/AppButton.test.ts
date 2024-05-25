import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppButton from '@/components/UI/AppButton.vue'

describe('AppButton', () => {
  it('Renders component', () => {
    const wrapper = mount(AppButton)

    expect(wrapper.exists()).toBe(true)
  })

  it('Render slot text value', () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: 'Buy Product'
      }
    })

    expect(wrapper.text()).toBe('Buy Product')
  })

  it('Render slot nested element', () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: '<div id="elemId"></div>'
      }
    })
    const elem = wrapper.find('#elemId')

    expect(elem.exists()).toBe(true)
  })
})
