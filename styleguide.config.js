const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  title: "汇众BI后台管理系统组件 Style Guide",
  components: "src/components/**/*.vue",
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-loader"
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    plugins: [
      // add vue-loader plugin
      new VueLoaderPlugin()
    ]
  }
};
