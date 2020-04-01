module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    'react-native/react-native': true
  },
  plugins: [
    'react',
    'react-native',
    'import',
    'jsx-a11y',
    'react-hooks',
  ],
  rules: {
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'semi': ['error', 'never'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never',
      'beforeClosing': 'allow',
    }],
    'react/jsx-filename-extension': ['error', {
      'extensions': [
        '.js',
      ],
    }],
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  }
}
