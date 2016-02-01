module.exports = {
  devtool: 'source-map',

  entry: './app/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true
  },

  module: {
    loaders: [
      
    ]
  }
}