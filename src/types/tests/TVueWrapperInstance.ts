import { VueWrapper } from '@vue/test-utils'

export type TVueWrapperInstance<T extends { new (...args: any[]): any }> = VueWrapper<
  InstanceType<T>
>
