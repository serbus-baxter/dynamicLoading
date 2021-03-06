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
    devtoolModuleFilenameTemplate: 
      (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
        options: {
          presets: ["@babel/preset-react"]
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
        exclude: [/node_modules/],
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_01",
      library: { type: "var", name: "app_01" },
      filename: "remoteEntry.js",
      remotes: {
        app_02: "app_02",
        app_03: "app_03"
      },
      exposes: {
        './SideNav': "./src/SideNav",
        './Page': "./src/Page"
      },
      shared: {
        react: {
          import: 'react',
          shareKey: 'react',
          shareScope: 'default',
          singleton: true,
        },
        'regenerator-runtime': {
          singleton: true,
        },
        'fm-loader': {
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
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
});
