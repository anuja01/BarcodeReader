module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [0],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export":"off",
    "react/jsx-curly-newline": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off"
  },
};
