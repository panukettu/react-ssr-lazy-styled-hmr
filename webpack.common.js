/* eslint-disable */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        //exclude: /node_modules|packages/,  // should work without exclude
        test: /\.js$/,
        use: {
          loader: "babel-loader?cacheDirectory=true"
        }
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
};
