const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

  const webpackConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
      index: process.cwd() + '/src/index'
    },
    output: {
      pathinfo: true,
      path: process.cwd() + '/build',
      filename: '[name].bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: '.'
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.jsx?$/,
          include: process.cwd() + '/src',
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: ['@babel/preset-env', '@babel/preset-react'],
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        __DEV__: true,
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        chunks: ['index'],
        inject: true,
      }),
      new webpack.NormalModuleReplacementPlugin(
        /a\/b\/c\/moduleA.js/,
        './moduleB.js'
      )
    ],
  };





module.exports = webpackConfig;
