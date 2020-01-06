const path = require('path');

module.exports = {
  mode: "development",

  // Enable sourcemaps for debugging webpack's output .js
  devtool: "source-map",

  // Add .ts and .tsx as resolvable extensions
  resolve: {
    extensions: [".ts", ".tsx"]
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
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }]
      },
      // All output '.js' files from TypeScript compiler will have any source
      // maps reprocessed by 'source-map-loader'
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};