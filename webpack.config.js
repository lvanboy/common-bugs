const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: "./Vue/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: "/.vue$/", loader: "vue-loader" },
            { test: "/.js$/", loader: 'babel-loader' },
            { test: "/.css$/", use: ['vue-style-loader', 'css-loader'] }
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