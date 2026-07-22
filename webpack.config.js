const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Version de build
const BUILD_VERSION = process.env.npm_package_version || new Date().getTime();

module.exports = {
  mode: "development",

  entry: "./src/main.jsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/ipad/",
  },

  // Configuration DevServer pour Webpack 4 (v3)
  devServer: {
    contentBase: path.join(__dirname, "public"), // Remplace "static"
    publicPath: "/ipad/",
    historyApiFallback: {
      index: "/ipad/index.html",
    },
    port: 8080,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   use: "babel-loader",
      // },
      {
  test: /\.jsx?$/,
  include: [
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "node_modules/@apollo/client"),
    path.resolve(__dirname, "node_modules/graphql"),
    path.resolve(__dirname, "node_modules/ts-invariant"),
    path.resolve(__dirname, "node_modules/zen-observable-ts"),
  ],
  use: {
    loader: "babel-loader",
  },
},
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_VERSION": JSON.stringify(BUILD_VERSION),
    }),

    new HtmlWebpackPlugin({
      template: "./index.html",
      buildVersion: BUILD_VERSION,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".", // Copie le contenu de /public directement dans /dist
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};