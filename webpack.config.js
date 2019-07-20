module.exports = {
  entry: "./src/webpack/webpackSample.ts",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader"}
    ]
  }
};
