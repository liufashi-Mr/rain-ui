const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
    preProcessor,
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
            test: /\.s[ac]ss$/,
            use: getStyleLoaders('sass-loader'),
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
              },
            },
          },
          {
            test: /\.(ttf|woff2?)$/,
            type: 'asset/resource',
          },
          {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/rain-ui.css',
    }),
  ],
  optimization: {
    minimize: true,
    // 压缩的操作
    minimizer: [
      // 压缩css
      new CssMinimizerPlugin(),
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
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'esm/index.js',
      libraryTarget: 'module',
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
    ...baseConfig,
  },
  {
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'umd/index.js',
      libraryTarget: 'umd',
      clean: true,
    },
    ...baseConfig,
  },
];
