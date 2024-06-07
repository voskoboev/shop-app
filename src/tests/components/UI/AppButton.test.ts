import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppButton from '@/components/UI/AppButton.vue'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppButton', () => {
  let wrapper: VueWrapper

  const setWrapperWithSlotValue = (value: string) => {
    wrapper = mount(AppButton, {
      slots: {
        default: value
      }
    })
  }

  it('Renders component', () => {
    const wrapper = mount(AppButton)

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
})
