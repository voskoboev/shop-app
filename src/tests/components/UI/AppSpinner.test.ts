import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppSpinner from '@/components/UI/AppSpinner.vue'

describe('AppSpinner', () => {
  it('Renders component', () => {
    const wrapper = mount(AppSpinner)

    expect(wrapper.exists()).toBe(true)
  })
})
