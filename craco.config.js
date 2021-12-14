/* eslint-disable */
const path = require('path');
const CracoAlias = require('craco-alias');
const resolve = (arg) => path.resolve(__dirname, arg);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    alias: {
      '@src': resolve('src'),
      '@components': resolve('src/components'),
      '@features': resolve('src/features'),
      '@pages': resolve('src/pages'),
      '@store': resolve('src/store'),
      '@layout': resolve('src/layout'),
      '@utils': resolve('src/utils'),
      '@assets': resolve('src/assets'),
    },
    configure: {
      entry: './src/index.tsx',
    },
  },
};
