module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  rules: {},
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',
      },
    },
  ],
};
