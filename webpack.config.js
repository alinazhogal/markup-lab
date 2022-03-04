const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    optimization: {
        minimizer: [new UglifyJsPlugin(), new CssMinimizerPlugin()],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ['src/**/*'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin({
            cache: false,
        }),
        new UglifyJsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
                options: {
                    inlineRequires: '/img/',
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}
