module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': [
        'plugin:react/recommended',
        'airbnb',
        'prettier', // Add this
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 11
    },
    'plugins': [
        'react',
        // '@typescript-eslint'
    ],
    'rules': {
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }]
    }
};
