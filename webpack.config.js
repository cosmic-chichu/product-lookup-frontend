const webpack = require('webpack');
const dotenv = require('dotenv');

let envKeys = null;

(() => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {})
})()

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.DefinePlugin(envKeys)
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
