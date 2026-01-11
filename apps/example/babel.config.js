module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // react-native-reanimated v4 already includes worklets internally
      "react-native-reanimated/plugin",
    ],
  };
};
