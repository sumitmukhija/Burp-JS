const path = require('path');

module.exports = {
    "entry": "./src/app.js",
    "output": {
        filename: "bundle.js",
        path: path.join(__dirname, "public/dist")
    },
    "module": {
      rules: [
        { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
        { test: /\.s?css$/, use: [{loader: "style-loader"}, {loader: "css-loader" }, {loader: "sass-loader"}]},
        { test: /\.(jpg|png)$/, use: {loader: 'url-loader'}}
      ]  
    }
};