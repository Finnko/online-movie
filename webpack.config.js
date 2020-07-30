const path = require(`path`);
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);

module.exports = (env) => {
  const isDev = env.mode === `development`;
  const isProd = !isDev;

  return {
    entry: `./src/index.js`,
    mode: isProd ? `production` : isDev && `development`,
    output: {
      filename: `bundle.js`,
      path: path.join(__dirname, `public/`)
    },
    devServer: {
      contentBase: `public`,
      hot: true,
      open: true,
      port: 1337,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: `babel-loader`,
          },
        },
        {
          test: /\.(tsx|ts)?$/,
          loader: `ts-loader`,
        },
      ],
    },
    resolve: {
      extensions: [`.ts`, `.tsx`, `.js`, `json`]
    },
    devtool: isDev ? `eval-source-map` : false,
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: [`en`],
      }),
    ],
  };
};
