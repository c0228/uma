module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@Assets':'./assets',
        '@AdvancedTopics': './src/AdvancedTopics',
        '@AppComponent': './src/Components',
        '@AppFormElement': './src/FormElements',
        '@AppNavigation': './src/Navigation',
        '@AppPage': './src/Pages',
        '@StaticData':'./src/StaticData',
        '@AppUtils':'./src/Utils'
      },
    }],
    "react-native-reanimated/plugin",
  ],
};
