const KotlinWebpackPlugin = require('kotlin-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const HtmlWebpackPluginConfig = {
  title: 'Hello Kotlin',
  template: path.resolve(__dirname, 'src/index.pug')
}

const devServerConfig = {
  compress: true,
  port: 9000,
  watchOptions: {
    ignored: /node_modules/
  }
}

module.exports = {
  devServer: devServerConfig,
  entry: 'kotlinApp',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../kotlin_build'),
        exclude: [
          /kotlin\.js$/ // Kotlin runtime doesn't have sourcemaps at the moment
        ],
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    modules: ['kotlin_build', 'node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/build.js'
  },

  plugins: [
    new KotlinWebpackPlugin({
      src: path.resolve(__dirname, 'src/kt'),
      verbose: true
    }),
    new HtmlWebpackPlugin(HtmlWebpackPluginConfig)
  ]
}
