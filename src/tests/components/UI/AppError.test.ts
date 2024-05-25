import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppError from '@/components/UI/AppError.vue'

describe('AppError', () => {
  it('Renders component', () => {
    const wrapper = mount(AppError)

    expect(wrapper.exists()).toBe(true)
  })

  it('Render slot text value', () => {
    const wrapper = mount(AppError, {
      slots: {
        default: 'Error'
      }
    })

    expect(wrapper.text()).toBe('Error')
  })

  it('Renders slot nested element', () => {
    const wrapper = mount(AppError, {
      slots: {
        default: '<div id="elemId"></div>'
      }
    })
    const elem = wrapper.find('#elemId')

    expect(elem.exists()).toBe(true)
  })
})
