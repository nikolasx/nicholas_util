const path = require("path")
const webpack = require('webpack')

function _resolve(url) {
    return path.resolve(__dirname, url)
}

module.exports = {


    entry: {
        index: './src/util'
    },

    output: {
        path: _resolve("dist"),
        filename: "[name].min.js",
        library: 'Util',
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}