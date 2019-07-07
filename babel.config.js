module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      'module-resolver',
      {
        alias: {
          $components: './src/components',
          $screens: './src/screens',
          $navigator: './src/navigator',
          $store: './src/store',
          $utils: './src/utils'
        }
      }
    ]
  ]
};
