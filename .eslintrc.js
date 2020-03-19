module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: 'babel-eslint',
	},
	overrides: [
		{
			'files': ['*.vue'],
			'rules': {
				'indent': 'off'
			}
		},
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
				'**/*.spec.js'
			],
			env: {
				jest: true,
			},
		},
	],
};
