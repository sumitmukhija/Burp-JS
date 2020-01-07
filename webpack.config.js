const path = require('path');

module.exports = {
  entry: "./src/app.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/dist")
  },

  mode: "production",

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
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }]
      },
      // All output '.js' files from TypeScript compiler will have any source
      // maps reprocessed by 'source-map-loader'
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.(jpg|png)$/, use: { loader: 'url-loader' } },
      {
        test: /\.s?css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, {
          loader: "sass-loader"
        }]
      },
      
    ]
  },
  
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};