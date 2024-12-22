// @ts-check
import tailwindcss from 'eslint-plugin-tailwindcss'
import json from 'eslint-plugin-jsonc'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'vue/no-empty-component-block': 'warn',
  },
},
).prepend(...tailwindcss.configs['flat/recommended'], json.configs['flat/base'])
