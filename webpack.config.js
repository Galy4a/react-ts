const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /.tsx?$/, use: 'babel-loader' },
      {
        test: /.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['postcss-loader'],
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
  },
};
