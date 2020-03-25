const path = require('path');
require('babel-polyfill')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: ['babel-polyfill','./Vue/index.js'],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /.vue$/, loader: "vue-loader" },
            {
                test: /.js$/, use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /.css$/, use: ['vue-style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index1.html',
            template: "./Vue/index.html",
        }),
        new VueLoaderPlugin()
    ]
}