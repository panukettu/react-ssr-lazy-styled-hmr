/* eslint-disable */
const webpack = require("webpack");
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&reload=true",
    "./src/index"
  ],
  output: {
    publicPath: "/"
  },
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
