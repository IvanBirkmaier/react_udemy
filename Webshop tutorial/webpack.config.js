const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true,
      safe: true,
      defaults: false
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};