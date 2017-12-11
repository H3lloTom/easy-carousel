const path =require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./src/carousel.js",
  output: {
    filename: "carousel.min.js",
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