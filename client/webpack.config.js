const path = require('path');
require('dotenv').config({ path: './.env' });
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  devServer: {
    port: 3000,
  },
  entry: path.resolve(__dirname, './index.tsx'),
  devtool: 'eval',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          fallback: {
            http: require.resolve('stream-http'),
            timers: require.resolve('timers-browserify'),
          },
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new NodePolyfillPlugin(),
  ],

};