const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const PATH_SOURCE = path.join(__dirname, '../../src');
const PATH_DEST = path.join(__dirname, '../../dest');

module.exports = {
    mode: 'development',

    devServer: {
        // The dev server will serve content from this directory.
        contentBase: PATH_DEST,

        // Specify a host. (Defaults to 'localhost'.)
        host: 'localhost',

        // Specify a port number on which to listen for requests.
        port: 8080,

        // When using the HTML5 History API (you'll probably do this with React
        // later), index.html should be served in place of 404 responses.
        historyApiFallback: true,

        // Show a full-screen overlay in the browser when there are compiler
        // errors or warnings.
        overlay: {
            errors: true,
            warnings: true,
        },
    },

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
                test: /\.js$/, // Apply this rule to files ending in .js
                exclude: /node_modules/, // Don't apply to files residing in node_modules
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                debug: false, // Output the targets/plugins used when compiling

                                // Configure how @babel/preset-env handles polyfills from core-js.
                                useBuiltIns: 'usage',

                                // Specify the core-js version. Must match the version in package.json
                                corejs: 3
                            }], '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },

    plugins: [
        // This plugin will generate an HTML5 file that imports all our Webpack
        // bundles using <script> tags. The file will be placed in `output.path`.
        new HtmlWebpackPlugin({
            template: path.join(PATH_SOURCE, './index.html')
        }),

        // This plugin will delete all files inside `output.path` (the dest directory),
        // but the directory itself will be kept.
        new CleanWebpackPlugin()
    ],
}