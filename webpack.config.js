const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        fileName: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}