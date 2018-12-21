/* eslint-disable */
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: ["webpack/hot/dev-server", "./src/index"],
  output: {
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
});
