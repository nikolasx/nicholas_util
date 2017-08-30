
const path = require("path")

function _resolve(url){
    return path.resolve(__dirname, url)
}

module.exports = {


    entry: {
        index: './src/util'
    },

    output: {

        path: _resolve("dist"),
        filename: "index.js"

    }
}