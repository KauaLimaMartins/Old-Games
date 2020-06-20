module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@utils': './src/utils',
          '@configs': './src/configs',
          '@src': './src',
          '@controllers': './src/app/controllers',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
