import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppPlaceholder from '@/components/UI/AppPlaceholder.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppPlaceholder', () => {
  let wrapper: TVueWrapperInstance<typeof AppPlaceholder>

  const setWrapperWithSlotValue = (value: string) => {
    wrapper = mount(AppPlaceholder, {
      slots: {
        default: value
      }
    })
  }

  it('Renders the component', () => {
    wrapper = mount(AppPlaceholder)

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
