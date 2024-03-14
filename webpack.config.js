const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: "development",
    output: {
        filename: "super.js"
    },
    plugins: [ 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(), 
            new TerserWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, /*'style-loader',*/ 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
};