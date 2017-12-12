const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry : {
    SASSLoader  : path.resolve(__dirname, 'src/js/SASSLoader.js'),
    StylusLoader: path.resolve(__dirname, 'src/js/StylusLoader.js'),
    LessLoader: path.resolve(__dirname, 'src/js/LessLoader.js')
  },
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
        test : /\.scss$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : ['css-loader', 'sass-loader']
        })
      },
      {
        test : /\.styl$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : ['css-loader', 'stylus-loader']
        })
      },
      {
        test : /\.less$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : ['css-loader', 'less-loader']
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
            presets : ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins : [
    new ExtractTextPlugin('css/[name].css')
  ]
}