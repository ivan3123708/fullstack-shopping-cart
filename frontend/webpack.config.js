const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: ['babel-regenerator-runtime', './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
      alias: {
        '@api': path.resolve(__dirname, 'src/api'),
        '@actions': path.resolve(__dirname, 'src/actions'),
        '@selectors': path.resolve(__dirname, 'src/selectors'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@typings': path.resolve(__dirname, 'src/typings'),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          })
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new ExtractTextPlugin('styles.css'),
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      host: '0.0.0.0',
      port: 3000,
      historyApiFallback: true,
      publicPath: '/dist',
      watchOptions: {
        aggregateTimeout: 500,
        poll: 1000
      }
    }
  }
}
