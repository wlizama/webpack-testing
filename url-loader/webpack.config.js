const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry : {
    index    : path.resolve(__dirname, 'src/js/index.js'),
    urlLoadersFonts : path.resolve(__dirname, 'src/js/url-loader-fonts.js'),
    urlLoadersVideos : path.resolve(__dirname, 'src/js/url-loader-videos.js')
  },
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'js/[name].js',
    publicPath : './dist/'
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
        test : /\.(mp4)$/,
        use : [
          {
            loader : 'url-loader',
            options : {
              limit : 9900000,
              name : 'videos/[name].[hash].[ext]'

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