const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/site-b.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle_b.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/site-b.html",
    }),
  ],
  devServer: {
    port: "30006",
  },
};
