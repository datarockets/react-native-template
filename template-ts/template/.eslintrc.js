module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
    'import',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
      },
    },
  },
  env: {
    'jest': true,
    'react-native/react-native': true,
  },
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
        '.ts',
        '.tsx',
      ],
    }],
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
};
