var path = require('path');
var webpack = require('webpack');
var config = {
    entry: [
      path.resolve(__dirname, 'js/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'static/bundle'),
        publicPath: '/static/bundle/',
        filename: 'main.js',
    },
    module: {
      loaders: [
        {
          test: /js/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.sass$/,
          loader: 'style!css!sass'
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url?prefix=font/&limit=5000'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
      ]
    },
    devServer: {
      proxy: {
        '*': 'http://localhost:38080/'
      }

    }
};
module.exports = config;