import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppPlaceholder from '@/components/UI/AppPlaceholder.vue'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppPlaceholder', () => {
  let wrapper: VueWrapper

  const setSlotValue = (value: string) => {
    wrapper = mount(AppPlaceholder, {
      slots: {
        default: value
      }
    })
  }

  it('Renders component', () => {
    const wrapper = mount(AppPlaceholder)

    expect(wrapper.exists()).toBe(true)
  })

  it('Renders slot text value', () => {
    setSlotValue(slotText)

    expect(wrapper.text()).toBe(slotText)
  })

  it('Renders slot nested element', () => {
    setSlotValue(slotElem)

    const elem = wrapper.find(`#${slotElemId}`)

    expect(elem.exists()).toBe(true)
  })
})
