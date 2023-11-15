//entry -> output

const path = require("path");

console.log(path.join(__dirname, "public"));
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.resolve(__dirname, "public"),
  },
};
