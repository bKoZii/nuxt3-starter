// @ts-check
import tailwindcss from 'eslint-plugin-tailwindcss'
import json from 'eslint-plugin-jsonc'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'vue/no-empty-component-block': 'error',
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/eqeqeq': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'vue/max-attributes-per-line': ['error', { singleline: 1, multiline: { max: 1 } }],
  },
},
).prepend(...tailwindcss.configs['flat/recommended'], json.configs['flat/base'])
