const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  tmdbApiKey: 'f7c2d65bac51c2b56135bd561cf46a91',
  devtool: "sourcemap"
};
