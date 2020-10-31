const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@body-background": "#24292e",
              "@font-family": "Dubai-Bold",
              "@disabled-color": "#707070",
              "@disabled-bg": "#b1b1b1",
              "@iconfont-css-prefix": "anticon",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
