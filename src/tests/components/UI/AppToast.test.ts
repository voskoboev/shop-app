import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppToast from '@/components/UI/AppToast.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppToast', () => {
  let wrapper: TVueWrapperInstance<typeof AppToast>

  const setWrapperWithSlotValue = (value: string) => {
    wrapper = mount(AppToast, {
      slots: {
        default: value
      }
    })
  }

  const setWrapperWithPropValue = (value: boolean) => {
    wrapper = mount(AppToast, {
      attachTo: document.body,
      props: {
        visibilityStatus: value
      }
    })
  }

  it('Renders the component', () => {
    const wrapper = mount(AppToast)

    expect(wrapper.exists()).toBe(true)
  })

  it('Renders a slot text value', () => {
    setWrapperWithSlotValue(slotText)

    expect(wrapper.text()).toBe(slotText)
  })

  it('Renders a slot nested HTML element', () => {
    setWrapperWithSlotValue(slotElem)
    const elem = wrapper.find(`#${slotElemId}`)

    expect(elem.html()).toBe(slotElem)
  })

  it('Has not the visibility class when the visibilityStatus prop is false', () => {
    setWrapperWithPropValue(false)
    const classes = wrapper.classes()

    expect(classes).toHaveLength(1)
    expect(classes).not.toContain(classes[1])
  })

  it('Has the visibility class when the visibilityStatus prop is true', () => {
    setWrapperWithPropValue(true)
    const classes = wrapper.classes()

    expect(classes).toHaveLength(2)
    expect(classes).toContain(classes[1])
  })
})
