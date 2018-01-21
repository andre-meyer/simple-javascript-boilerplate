const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, 'src'),
  target: 'web',
  entry: 'index.js',
  devtool: 'source-map-eval',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    symlinks: false,
    modules: [
      `${__dirname}/src`,
      'node_modules'
    ] },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /(node_modules)/, 
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        loader: 'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      }
    ],
  },
  devServer: {
    disableHostCheck: true,
    contentBase: false,
    port: 5000,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/html/index.html'),
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
}
