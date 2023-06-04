const withTwin = require("./withTwin.js");
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    // removeConsole: {
    //   exclude: ["error"],
    // },
    // styledComponents: true,
  },
  experimental: {
    esmExternals: true,
    modularizeImports: {},
  },
};

module.exports = withTwin(nextConfig);
