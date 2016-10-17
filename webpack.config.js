'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: {
    bundle: path.join(__dirname, 'index.js')
  },
  module: {
    loaders: [
      //.js
      {
        test: /\.js$/i,
        loader: 'babel',
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  output: {
    filename: 'bundles/[name].webpack.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  watch: true
};