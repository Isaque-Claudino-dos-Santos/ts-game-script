// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

/**
 * @type {import('webpack-cli').WebpackConfiguration}
 */

console.log(path.resolve('assets'))
const config = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new dotenv(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg|webp)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
        include: path.resolve('assets'),
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      '@Engine': path.resolve(__dirname, 'src', 'Engine'),
      '@Type': path.resolve(__dirname, 'src', 'Engine', 'Types'),
      '@Interface': path.resolve(__dirname, 'src', 'Engine', 'Interfaces'),
      '@Asset': path.resolve(__dirname, 'assets'),
    },
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
