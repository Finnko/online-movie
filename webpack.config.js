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
      path: path.join(__dirname, `public`)
    },
    devServer: {
      contentBase: path.join(__dirname, `public`),
      inline: false,
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
        }
      ],
    },
    devtool: isDev ? `eval-source-map` : `none`,
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: [`en`],
      }),
    ],
  };
};
