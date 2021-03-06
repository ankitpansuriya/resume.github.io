const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: {
        app : './src/js/app'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module:{
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            }, {
                test: /\.hbs$/,
                loader: 'handlebars-template-loader',
                query: {
                    root: "index"
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([{
            from: path.resolve('./src/index.html'),
            to: path.resolve('./dist/index.html')
        },{
            from: path.resolve('./src/img/'),
            to: path.resolve('./dist/img/')
        }])
    ]
}

module.exports = config;