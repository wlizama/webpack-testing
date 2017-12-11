const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry : path.resolve(__dirname, 'src/js/index.js'),
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'js/[name].js'
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : 'css-loader'
        })
      },
      {
        test : /\.json$/,
        use : {
          loader : 'json-loader',
        }
      },
      {
        test : /\.js$/,
        exclude : /(node_modules)/,
        use : {
          loader : 'babel-loader',
          options : {
            presets : ['es2015']
          }
        }
      }
    ]
  },
  plugins : [
    new ExtractTextPlugin('css/[name].css')
  ]
}