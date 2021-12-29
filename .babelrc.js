const path = require('path');
const resolve = (arg) => path.resolve(__dirname, arg);

module.exports = {
  presets: ['@babel/react'],
  ignore: ['**/__snapshots__', '**/*.d.ts', '**/*.test.*', '**/*.stories.*'],
  plugins: [
    '@babel/plugin-transform-typescript',
    'babel-plugin-typescript-to-proptypes',
    '@babel/plugin-proposal-export-default-from',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      'babel-plugin-module-resolver',
      {
        root: './src',
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
      },
    ],
  ],
};
