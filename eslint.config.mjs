import withNuxt from './.nuxt/eslint.config.mjs'
// import eslintPluginTailwindCss from 'eslint-plugin-tailwindcss'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default withNuxt([
  // {
  //   plugins: {
  //     tailwindcss: eslintPluginTailwindCss,
  //   },
  //   rules: {
  //     ...eslintPluginTailwindCss.configs.recommended.rules,
  //     'tailwindcss/no-custom-classname': [
  //       'warn',
  //       {
  //         whitelist: ['project', 'social'],
  //       },
  //     ],
  //   },
  // },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginPrettier.configs?.recommended?.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'all',
          arrowParens: 'always',
        },
      ],
    },
  },
  {
    rules: {
      'no-undef': 'off',
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
    },
  },
  {
    ignores: ['!src/server/api/public/**'],
  },
])
