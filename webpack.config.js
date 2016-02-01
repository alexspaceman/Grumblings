module.exports = {
  devtool: 'source-map',

  entry: './app/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}