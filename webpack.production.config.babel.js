import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import tsImportPluginFactory from 'ts-import-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[name]-[hash:8].js',
    chunkFilename: 'chunk-[name]-[hash:8].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less', '.json'],
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib'
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true'
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle-[name]-[hash:8].css',
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      __DEV__: false
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/vendor-manifest.json')
    }),
    new HtmlWebpackPlugin({
      env: 'production',
      title: 'React Cli',
      template: path.resolve(__dirname, './index.ejs')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve('./dll/vendor.dll.js'),
      includeSourcemap: false
    }),
    new UglifyJsPlugin()
  ]
};
