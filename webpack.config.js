// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

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
      '@Draw': path.resolve(__dirname, 'src', 'Draw'),
      '@Display': path.resolve(__dirname, 'src', 'Display'),
      '@Event': path.resolve(__dirname, 'src', 'Event'),
      '@Physical': path.resolve(__dirname, 'src', 'Physical'),
      '@Game': path.resolve(__dirname, 'src', 'Game'),
      '@Module': path.resolve(__dirname, 'src', 'Modules'),
      '@Engine': path.resolve(__dirname, 'src', 'Engine'),
      '@Interface': path.resolve(__dirname, 'src', 'Interfaces'),
      Game$: path.resolve(__dirname, 'src', 'Game', 'index.ts'),
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
