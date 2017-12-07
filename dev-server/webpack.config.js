const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
 

module.exports = {
  entry : path.resolve(__dirname, 'index.js'),
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  devServer : {
    // contentBase : path.join(__dirname, 'dist'),
    open    : true, // abrir en una pestaña nueva
    compress: true,
    stats   : 'errors-only',
    port    : 3179
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : ['style-loader', 'css-loader']
      }
    ]
  }
}