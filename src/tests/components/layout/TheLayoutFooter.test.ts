import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TheLayoutFooter from '@/components/layout/TheLayoutFooter.vue'

describe('TheLayoutFooter', () => {
  const wrapper = mount(TheLayoutFooter)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
