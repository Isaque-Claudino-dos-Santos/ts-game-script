// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

const config = {
  entry: {
    main: './src/index.ts',
    tsgame2d: './TsGame2D/index.ts',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
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
        type: 'asset/resource',
        use: [{ loader: 'file-loader' }],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],

    alias: {
      '@TsGame2D': path.resolve(__dirname, 'TsGame2D', 'index.ts'),
      '@Drawing/*': path.resolve(__dirname, 'TsGame2D', 'Drawing/*'),
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
