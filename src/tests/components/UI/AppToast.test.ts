import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppToast from '@/components/UI/AppToast.vue'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppToast', () => {
  let wrapper: VueWrapper

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

  it('Renders component', () => {
    const wrapper = mount(AppToast)

    expect(wrapper.exists()).toBe(true)
  })

  it('Renders slot text value', () => {
    setWrapperWithSlotValue(slotText)

    expect(wrapper.text()).toBe(slotText)
  })

  it('Renders slot nested element', () => {
    setWrapperWithSlotValue(slotElem)
    const elem = wrapper.find(`#${slotElemId}`)

    expect(elem.html()).toBe(slotElem)
  })

  it('Has not visibility class when visibilityStatus prop is false', () => {
    setWrapperWithPropValue(false)
    const classes = wrapper.classes()

    expect(classes).toHaveLength(1)
    expect(classes).not.toContain(classes[1])
  })

  it('Has visibility class when visibilityStatus prop is true', () => {
    setWrapperWithPropValue(true)
    const classes = wrapper.classes()

    expect(classes).toHaveLength(2)
    expect(classes).toContain(classes[1])
  })
})
