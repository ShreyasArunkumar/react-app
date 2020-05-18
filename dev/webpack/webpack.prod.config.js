const path = require('path');

const PATH_SOURCE = path.join(__dirname, '../../src');
const PATH_DEST = path.join(__dirname, '../../dest');

module.exports = {
    mode: 'development',

    entry: [
        path.join(PATH_SOURCE, './index.js'),
    ],

    output: {
        path: PATH_DEST,
        filename: 'js/[name].[hash].js' // keep it dynamic so it will be useful for caching
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                debug: false,
                                useBuiltIns: 'usage',
                                corejs: 3
                            }]
                        ]
                    }
                }
            }
        ]
    }
}