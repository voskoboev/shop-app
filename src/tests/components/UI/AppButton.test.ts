import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppButton from '@/components/UI/AppButton.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppButton', () => {
  let wrapper: TVueWrapperInstance<typeof AppButton>

  const setWrapperWithSlotValue = (value: string) => {
    wrapper = mount(AppButton, {
      slots: {
        default: value
      }
    })
  }

  it('Renders the component', () => {
    wrapper = mount(AppButton)

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
})
