const path = require("path");

module.exports = {
  entry: {
    panel: path.join(__dirname, "src/index.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
