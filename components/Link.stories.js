import StoryRouter from 'storybook-vue-router';
import '../config/storybook/nuxt-integration';

export default {
  title: 'Link',
  decorators: [StoryRouter()],
};

export const NuxtWebsite = () => '<Link />';
