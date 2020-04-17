const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/Index.bs.js",
  mode: "production",
  output: {
    path: path.join(__dirname, "lib/prod"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index_production.html"),
    }),
  ],
};
