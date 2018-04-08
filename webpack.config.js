var path = require("path");

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
