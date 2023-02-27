const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/site-a.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle_a.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/site-a.html",
    }),
  ],
  devServer: {
    port: "30005",
  },
};
