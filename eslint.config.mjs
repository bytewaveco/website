import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginBetterTailwindCss from 'eslint-plugin-better-tailwindcss'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default withNuxt([
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindCss,
    },
    rules: {
      ...eslintPluginBetterTailwindCss.configs.recommended.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/no-unregistered-classes': [
        'warn',
        {
          ignore: ['not-prose', 'project'],
        },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
      },
    },
  },
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
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/unified-signatures': 'off',
    },
  },
  {
    ignores: ['!server/api/public/**'],
  },
])
