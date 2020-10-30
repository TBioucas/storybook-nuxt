module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/no-unused-components': 'error',
  },
  globals: {
    $nuxt: true,
  },
};
