import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppToast from '@/components/UI/AppToast.vue'

describe('AppToast', () => {
  it('Render component', () => {
    const wrapper = mount(AppToast)

    expect(wrapper.exists()).toBe(true)
  })

  it('Render slot text value', () => {
    const wrapper = mount(AppToast, {
      slots: {
        default: 'Text'
      }
    })

    expect(wrapper.text()).toBe('Text')
  })

  it('Render slot nested element', () => {
    const wrapper = mount(AppToast, {
      slots: {
        default: '<div id="elemId"></div>'
      }
    })
    const elem = wrapper.find('#elemId')

    expect(elem.exists()).toBe(true)
  })

  it('Check visibilityStatus prop is boolean', () => {
    const wrapper = mount(AppToast, {
      props: {
        visibilityStatus: false
      }
    })

    expect(wrapper.props('visibilityStatus')).toBeTypeOf('boolean')
  })

  it('Component has extra visibility class when visibilityStatus prop is true', () => {
    const wrapper = mount(AppToast, {
      props: {
        visibilityStatus: true
      }
    })
    const classes = wrapper.classes()

    expect(classes).toContain(classes[1])
  })

  it('Component has not extra visibility class when visibilityStatus prop is false', () => {
    const wrapper = mount(AppToast, {
      props: {
        visibilityStatus: false
      }
    })
    const classes = wrapper.classes()

    expect(classes).toHaveLength(1)
    expect(classes).not.toContain(classes[1])
  })
})
