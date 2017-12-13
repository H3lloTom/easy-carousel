const path =require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./src/ok-carousel.js",
  output: {
    filename: "ok-carousel.min.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};