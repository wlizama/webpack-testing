const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry : {
    index    : path.resolve(__dirname, 'src/js/index.js'),
    urlLoadersFonts : path.resolve(__dirname, 'src/js/url-loader-fonts.js')
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
        test : /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
        use : [
          {
            loader : 'url-loader',
            options : {
              limit : 95000
            }
          }
        ]
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