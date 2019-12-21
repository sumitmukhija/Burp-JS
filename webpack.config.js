const path = require('path');

module.exports = {
    "entry": "./src/app.js",
    "output": {
        filename: "bundle.js",
        path: path.join(__dirname, "public/dist")
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 8080
  },
  module: {
    rules: [
      { test: /\.(jpg|png)$/, use: { loader: 'url-loader' } },
      { test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      {
        test: /\.s?css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, {
          loader: "sass-loader"
        }]
      },
    ]
  }
};