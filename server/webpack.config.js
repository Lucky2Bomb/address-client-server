const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

const Dotenv = require("dotenv-webpack");
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  //   mode: "development",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  externals: [
    webpackNodeExternals(), //need for fix "Critical dependency: the request of a dependency is an expression"
  ],
  plugins: [
    new Dotenv(),
    new NodemonPlugin()
  ]
};
