import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppError from '@/components/UI/AppError.vue'

const slotText = 'Buy Product'
const slotElem = '<div id="elemId"></div>'
const slotElemId = 'elemId'

describe('AppError', () => {
  let wrapper: VueWrapper

  const setWrapperWithSlotValue = (value: string) => {
    wrapper = mount(AppError, {
      slots: {
        default: value
      }
    })
  }

  it('Renders component', () => {
    const wrapper = mount(AppError)

    expect(wrapper.exists()).toBe(true)
  })

  it('Renders slot text value', () => {
    setWrapperWithSlotValue(slotText)

    expect(wrapper.text()).toBe(slotText)
  })

  it('Renders slot nested element', () => {
    setWrapperWithSlotValue(slotElem)
    const elem = wrapper.find(`#${slotElemId}`)

    expect(elem.exists()).toBe(true)
  })
})
