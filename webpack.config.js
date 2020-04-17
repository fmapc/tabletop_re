const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugion = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["./src/Index.bs.js"],
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugion([{ from: "assets", to: "assets" }]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index_production.html"),
    }),
  ],
};
