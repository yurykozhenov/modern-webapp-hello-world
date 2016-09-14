const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    deps: path.resolve(__dirname, './src/deps.js')
  },
  output: {
    path: path.resolve(__dirname, './dest'),
    filename: '[name].bundle.js'
  },
  devtool: '#inline-source-map',
  resolve: {
    root: path.resolve(__dirname, './src')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file?name=img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'deps'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: 'index.html'
      }
    ]),
    new CleanWebpackPlugin([
      'dest'
    ])
  ].concat(PRODUCTION ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ] : [])
};
