import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppPlaceholder from '@/components/UI/AppPlaceholder.vue'

describe('AppPlaceholder', () => {
  it('Renders component', () => {
    const wrapper = mount(AppPlaceholder)

    expect(wrapper.exists()).toBe(true)
  })

  it('Render slot default value', () => {
    const wrapper = mount(AppPlaceholder, {
      slots: {
        default: 'Text'
      }
    })

    expect(wrapper.text()).toBe('Text')
  })

  it('Renders slot nested element', () => {
    const wrapper = mount(AppPlaceholder, {
      slots: {
        default: '<div id="elemId"></div>'
      }
    })
    const elem = wrapper.find('#elemId')

    expect(elem.exists()).toBe(true)
  })
})
