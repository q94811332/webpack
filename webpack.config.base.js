const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'XDML - 写代码啦',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.styl$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                ]
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
};