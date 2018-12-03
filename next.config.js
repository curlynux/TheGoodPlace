import css from "@zeit/next-css";

export default css(
  {
    cssModules: true,
    webpack(config, options) {
      module: {
        rules: [{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }]
      }
      return config;
    }
  });
