const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
      },
    },
    preProcessor === 'less-loader'
      ? {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        }
      : preProcessor,
  ].filter(Boolean);
};

const baseConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        oneOf: [
          {
            // 用来匹配 .css 结尾的文件
            test: /\.css$/,
            // use 数组里面 Loader 执行顺序是从右到左
            use: getStyleLoaders(),
          },
          {
            test: /\.less$/,
            use: getStyleLoaders('less-loader'),
          },
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
          },
          {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    // 压缩的操作
    minimizer: [
      // 压缩css
      new MiniCssExtractPlugin({
        filename: '../style/rain-ui.min.css',
      }),
      // 压缩js
      new TerserWebpackPlugin(),
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json'],
  },
  mode: 'production',
  devtool: 'source-map',
};

module.exports = [
  {
    name: 'esm',
    output: {
      path: path.resolve(__dirname, './dist/esm'),
      filename: 'index.js',
      libraryTarget: 'module',
    },
    experiments: {
      outputModule: true,
    },
    ...baseConfig,
  },
  {
    name: 'umd',
    output: {
      path: path.resolve(__dirname, './dist/umd'),
      filename: 'index.js',
      libraryTarget: 'umd',
    },
    ...baseConfig,
  },
];
