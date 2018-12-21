/* eslint-disable */
const common = require("./webpack.common.js");
const merge = require("webpack-merge");

module.exports = merge(common, {
  entry: ["./src/index"],
  mode: "production",
  output: {
    publicPath: "/dist/"
  }
});
