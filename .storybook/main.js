const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

const customWebpackConfig = require('../craco.config.js');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@react-theming/storybook-addon',
    '@storybook/addon-jest',
  ],
  webpackFinal: async (config) => {
    const { webpack } = customWebpackConfig;
    config.module.rules.push({
      test: /\.tsx$/,
      exclude: [/node_modules/, /.*.stories.*/],
      loader: 'eslint-loader',
      options: { quiet: true },
    });
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...webpack.alias,
          '.storybook': path.join(__dirname, '.'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
