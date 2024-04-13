module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@Assets':'./assets',
        '@AppComponent': './src/Components',
        '@AppFormElement': './src/FormElements',
        '@AppNavigation': './src/Navigation',
        '@AppPage': './src/Pages',
        '@StaticData':'./src/StaticData'
      },
    }],
    "react-native-reanimated/plugin",
  ],
};
