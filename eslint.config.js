const js = require('@eslint/js')
const globals = require('globals')
const react = require('eslint-plugin-react')
const babelParser = require('@babel/eslint-parser')

module.exports = [
	{
		ignores: ['.next/', 'out/'],
	},
	js.configs.recommended,
	react.configs.flat.recommended,
	{
		files: ['**/*.js', '**/*.jsx'],
		languageOptions: {
			parser: babelParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				requireConfigFile: false,
				babelOptions: {
					presets: ['@babel/preset-react'],
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			// NextJs does not require you to import React into each component. so suppress errors for missing 'import React' in files.
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'react/no-unescaped-entities': 'off',
			'react/jsx-no-undef': [1, { 'allowGlobals': true }],
			'semi': ['error', 'never'],
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			'keyword-spacing': ['error', { 'before': true, 'after': true }],
			'space-infix-ops': ['error', { 'int32Hint': false }],
			'comma-spacing': ['error'],
			'arrow-spacing': ['error'],
			'semi-spacing': ['error'],
			'space-before-function-paren': ['error'],
			'no-multi-spaces': 'error',
			'valid-typeof': 'error',
			'quotes': ['error', 'single'],
			'indent': ['error', 'tab', { 'SwitchCase': 1 }],
			'object-curly-spacing': ['error', 'always'],
			'curly': 'error'
		},
	},
]
