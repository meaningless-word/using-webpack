const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "super.js"
    },
    plugins: [ new MiniCssExtractPlugin() ],
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
            }
        ]
    }
};