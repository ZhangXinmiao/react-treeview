var path = require('path');

var ROOT_PATH = path.resolve(__dirname, 'example');

module.exports = {
  entry:{
    app: [
        "./example/src/index.js"
    ]
  },
  output: {
     path: ROOT_PATH,
     filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
    //   loader: 'babel',
      exclude: /node_modules/,
      include: [
            path.join(__dirname, 'example')
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      }
    ]
  },
  devServer: {
    contentBase: ROOT_PATH,
    inline: true,
    stats: {
        colors: true,
        chunks: false,
        children: false
    }
  }
}
