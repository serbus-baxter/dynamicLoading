const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require('path');

module.exports = () => ({
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  target: 'web',

  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_02",
      library: { type: "var", name: "app_02" },
      filename: "remoteEntry.js",
      remotes: {
        app_01: "app_01",
        app_03: "app_03"
      },
      exposes: {
        './Dialog': "./src/Dialog",
        './Icon': "./src/Icon",
        './Tabs': "./src/Tabs",
        './manifestArr': "./src/manifestArr",
      },
      shared: {
        react: {
          import: 'react',
          shareKey: 'react',
          shareScope: 'default',
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        "@material-ui/core": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
        'regenerator-runtime': {
          singleton: true,
        },
        'fm-loader': {
          singleton: true,
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"]
    })
  ]
});
