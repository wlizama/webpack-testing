const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//fallback : Es un plan B, si algo no funciona ok, fallback. En el caso del url loader si no logra convertir todo a base 64 pasa a exportarlo a un archivo independiente

module.exports = {
  entry : path.resolve(__dirname, 'index.js'),
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : 'css-loader'
        })
      }
    ]
  },
  plugins : [
    new ExtractTextPlugin('css/[name].css')
  ]
}