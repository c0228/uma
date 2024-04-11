module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@Assets':'./assets',
        '@AppComponent': './src/Components',
        '@AppNavigation': './src/Navigation',
        '@AppPage': './src/Pages'
      },
    }],
    "react-native-reanimated/plugin",
  ],
};
