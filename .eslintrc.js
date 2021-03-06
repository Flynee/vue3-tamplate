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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', { 'code': 180 }],
    'vue/html-quotes': 'warn',
    'no-param-reassign': ['error', { 'props': false }],
    'camelcase': 0,
    'no-mixed-operators': 'off',
    'no-bitwise': 'off',
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
    "vue/order-in-components": [
        "error",
        {
          "order": [
            "el",
            "name",
            ["components", "directives", "filters"],
            "extends",
            "mixins",
            "props",
            "data",
            "computed",
            "watch",
            "beforeCreate",
            "created",
            "beforeMount",
            "mounted",
            "beforeUpdate",
            "updated",
            "activated",
            "deactivated",
            "beforeDestroy",
            "destroyed",
            "methods",
          ]
        }
      ],
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
