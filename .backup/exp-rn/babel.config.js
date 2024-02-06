module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // env: {
    //  development: {
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
    //  },
   // },
  };
};
