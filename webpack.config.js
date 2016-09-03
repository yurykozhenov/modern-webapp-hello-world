// const webpack = require('webpack');
// const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dest',
    filename: 'bundle.js'
    // publicPath: '/assets/'
  },
  devtool: 'source-map',
  // devServer: {hot: true}.
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  // noParse: modulesDirPath,
  plugins: [
    /* new webpack.ProvidePlugin({  // This plugin creates global variable
      angular: 'angular'
    }),*/
    /* new NgAnnotatePlugin({add: true}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
        // drop_console: true,
        // unsafe: true
      },
      output: {
        comments: false
      }
    }) */
  ]
};
