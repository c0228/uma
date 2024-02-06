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
              '@AppAssets': './assets',
              '@AppComponent': './src/templates/Components',
              '@AppFeature': './src/templates/Features',
              '@AppFormElement': './src/templates/FormElements',
              '@AppGrid': './src/templates/Grid',
              '@AppThemes': './src/templates/Themes',
              '@AppPage': './src/pages'
            },
          }],
          "react-native-reanimated/plugin",
        ],
    //  },
   // },
  };
};
