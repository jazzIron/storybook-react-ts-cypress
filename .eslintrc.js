module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:cypress/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.test.tsx'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
