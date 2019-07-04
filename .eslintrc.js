module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		es6: true,
		node: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'standard'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
		'linebreak-style': 0,
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-use-before-define': 'off'
	}
}
