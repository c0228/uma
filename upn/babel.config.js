module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@Assets':'./assets',
        '@AppComponent': './src/templates/Components',
        '@AppNavigation': './src/Navigation',
        '@AppFeature': './src/templates/Features',
        '@AppFormElement': './src/templates/FormElements',
        '@AppPage': './src/pages'
      },
    }],
    "react-native-reanimated/plugin",
  ],
};
