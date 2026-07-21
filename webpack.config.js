const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",

    entry: "./src/main.jsx",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
};