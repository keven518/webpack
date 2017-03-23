var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/app.js',
  },
  output: {
    path: './dist',
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['latest']
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}