// Metro configuration for Pocket Taxidermist.
//
// This project uses Expo's default Metro setup. Reanimated is configured
// through the Babel plugin in babel.config.js, so no custom transformer is
// required here.
const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;