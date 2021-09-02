module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    THING: false,
    CMAP: false,
    uino: false,
    spray: false,
  },
  rules: {
    indent: ['error', 4],
    'vue/html-indent': ['error', 4],
    'no-console': process.env.NODE_ENV === 'production' ? ["error", { allow: ["warn", "error"] }] : 'off',
    'max-len': ['warn', { 'code': 500 }],
    'vue/html-quotes': 'warn',
    'no-param-reassign': ['error', { 'props': false }],
    'camelcase': 0,
    'no-mixed-operators': 'off',
    'no-bitwise': 'off',
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
