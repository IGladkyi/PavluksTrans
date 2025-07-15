const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config")
const path = require("path")

/** @type {import('@react-native/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname)

// Remove 'svg' from assetExts and add to sourceExts
const assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== "svg"
)
const sourceExts = [...defaultConfig.resolver.sourceExts, "svg"]

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts,
    sourceExts,
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@screens": path.resolve(__dirname, "src/screens"),
      "@navigation": path.resolve(__dirname, "src/navigation"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
    },
  },
})
