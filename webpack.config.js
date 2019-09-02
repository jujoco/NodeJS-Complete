const path = require('path');
const DIST_DIR = path.join(__dirname, '/public/React_public');

module.exports = {
  entry: `./views/React_App/index.js`,
  output: {
    path: `${DIST_DIR}`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};