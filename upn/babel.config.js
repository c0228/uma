module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@AppComponent': './src/templates/Components',
        '@AppFeature': './src/templates/Features',
        '@AppFormElement': './src/templates/FormElements',
        '@AppPage': './src/pages'
      },
    }],
    "react-native-reanimated/plugin",
  ],
};
