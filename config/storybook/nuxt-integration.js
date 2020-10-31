import Vue from 'vue';

// The Nuxt components
// import NoSSR from '~/.nuxt/components/no-ssr.js';
import NuxtChild from '~/.nuxt/components/nuxt-child.js';
import Nuxt from '~/.nuxt/components/nuxt.js';
import NuxtLink from '~/.nuxt/components/nuxt-link.client.js';

// Component: <nuxt-child>
Vue.component(NuxtChild.name, NuxtChild);

// Component: <NuxtLink>
Vue.component(NuxtLink.name, NuxtLink);
Vue.component('NLink', NuxtLink);

// Component: <nuxt>`
Vue.component(Nuxt.name, Nuxt);
