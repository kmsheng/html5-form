var path = require("path");

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
