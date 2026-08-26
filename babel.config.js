module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Must be listed after all other plugins.
      'react-native-reanimated/plugin',
    ],
  };
};