const path = require('path');

module.exports = {
  // declare bundle as Node.js bundle
  target: 'node',
  // define root file of server app
  entry: './src/index.js',
  // where to put output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // run babel on all js files
  // ignore node modules and use presets
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: [ 'last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};
