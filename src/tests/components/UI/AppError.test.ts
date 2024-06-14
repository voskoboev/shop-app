import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppError from '@/components/UI/AppError.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppError', () => {
  let wrapper: TVueWrapperInstance<typeof AppError>

  const setWrapperWithSlotValue = (value: string) => {
    wrapper = mount(AppError, {
      slots: {
        default: value
      }
    })
  }

  it('Renders the component', () => {
    wrapper = mount(AppError)

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
