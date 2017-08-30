const path = require("path")

function _resolve(url) {
    return path.resolve(__dirname, url)
}

module.exports = {


    entry: {
        index: './src/util'
    },

    output: {
        path: _resolve("dist"),
        filename: "index.js"
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
    }
}