const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, '.'),
    entry: {
        'content': './src/content.js'
    },
    output: {
        path: path.join(__dirname, './dist/src'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        loaders:[
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader:'babel?presets[]=es2015'
            }
        ]
    }
}
