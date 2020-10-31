import { mount, RouterLinkStub } from '@vue/test-utils';
import Link from '@/components/Link.vue';

describe('Link', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Link, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
