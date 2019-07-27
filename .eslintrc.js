module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'vue/html-quotes': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/attributes-order': ['error', {
      'order': [
        'CONDITIONALS',
        'LIST_RENDERING',
        'DEFINITION',
        'EVENTS',
        'TWO_WAY_BINDING',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'CONTENT'
      ]
    }],

    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'ignore',
      'named': 'ignore',
      'asyncArrow': 'ignore'
    }],
    'comma-dangle': 'off',
    'no-console': 'off',
    'no-trailing-spaces': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
