import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TheLayoutFooter from '@/components/layout/TheLayoutFooter.vue'

describe('TheLayoutFooter', () => {
  it('Renders component', () => {
    const wrapper = mount(TheLayoutFooter)

    expect(wrapper.exists()).toBe(true)
  })
})
