module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    globals: {
        jest: true,
    },
    extends: [
        'plugin:jest/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:jsdoc/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
        'import',
        'prefer-arrow',
        'jest',
        'react',
        'eslint-plugin-tsdoc',
        'jsdoc',
    ],
    root: true,
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                overrides: {
                    constructors: 'off',
                },
            },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-static-field',
                    'public-static-method',
                    'protected-static-field',
                    'protected-static-method',
                    'private-static-field',
                    'private-static-method',

                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',

                    'public-abstract-field',
                    'protected-abstract-field',
                    'private-abstract-field',

                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',

                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'public-abstract-method',
                    'protected-abstract-method',
                    'private-abstract-method',
                ],
            },
        ],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: true, classes: true, variables: true, typedefs: true },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/triple-slash-reference': ['error', { path: 'never', types: 'never', lib: 'never' }],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-within-parens': ['off', 'never'],
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
            },
        ],
        'arrow-body-style': 'error',
        'arrow-parens': ['off', 'as-needed'],
        camelcase: 'error',
        'class-methods-use-this': 'off',
        complexity: 'off',
        'constructor-super': 'error',
        curly: 'error',
        'dot-notation': 'error',
        'eol-last': 'off',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'id-blacklist': ['error', 'any', 'number', 'string', 'boolean'],
        'id-match': 'error',
        indent: [
            'error',
            4,
            {
                MemberExpression: 1,
                SwitchCase: 1,
            },
        ],
        'import/no-cycle': 'error',
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.*', '**/*.spec.*'] }],
        'import/prefer-default-export': 'off',
        'import/order': ['error', { 'newlines-between': 'never' }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns': 'error',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/check-tag-names': 'off',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/valid-types': 'off',
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: false,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false,
                },
            },
        ],
        'linebreak-style': 'off',
        'max-classes-per-file': ['error', 1],
        'max-len': [
            'error',
            {
                code: 120,
                ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
            },
        ],
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-extra-semi': 'off',
        'no-fallthrough': 'off',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'off',
        'no-multiple-empty-lines': 'off',
        'no-new-wrappers': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'off',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'error',
        'no-useless-constructor': 'off',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow/prefer-arrow-functions': 'off',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'quote-props': 'off',
        radix: 'error',
        'react/prop-types': 'off',
        'space-before-function-paren': 'off',
        'space-infix-ops': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'off',
        '@typescript-eslint/tslint/config': [
            'error',
            {
                rules: {
                    'comment-format': [true, 'check-space'],
                    'jsdoc-format': true,
                    'no-reference-import': true,
                    'trailing-comma': [
                        true,
                        {
                            multiline: {
                                objects: 'always',
                                arrays: 'always',
                                functions: 'never',
                                typeLiterals: 'ignore',
                            },
                            singleline: 'never',
                            esSpecCompliant: true,
                        },
                    ],
                },
            },
        ],
        'tsdoc/syntax': 'error',
    },
    overrides: [
        {
            files: ['**/epic/*.test.ts'],
            rules: {
                'jest/expect-expect': 'off',
            },
        },
        {
            files: ['**/**/*.test.ts', '**/__mocks__/*.ts'],
            rules: {
                'jsdoc/require-jsdoc': 'off',
            },
        },
    ],
};
