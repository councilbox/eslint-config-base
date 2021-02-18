module.exports = {
	extends: [
		'airbnb-base',
		'plugin:json/recommended'
	],
	rules: {
		'arrow-body-style': 'warn',
		'arrow-parens': ['error', 'as-needed'],
		'comma-dangle': ['error', 'only-multiline'],
		'function-paren-newline': 'warn',
		'import/extensions': ['error', 'ignorePackages'],
		'import/no-named-as-default': 'warn',
		'import/prefer-default-export': 'warn',
		indent: ['error', 'tab', {
			ignoredNodes: ['TemplateLiteral'],
			SwitchCase: 1
		}],
		'max-len': ['warn', {
			code: 120,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			tabWidth: 4
		}],
		'newline-per-chained-call': 'warn',
		'no-extra-boolean-cast': 'warn',
		'no-multiple-empty-lines': ['error', { max: 2 }],
		'no-new': 'warn',
		'no-nested-ternary': 'warn',
		'no-param-reassign': 'warn',
		'no-plusplus': 'warn',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-useless-catch': 'warn',
		'no-useless-escape': 'warn',
		'one-var': 'warn',
		'operator-linebreak': ['warn', 'before', { overrides: { '?': 'after' } }]
	}
};
