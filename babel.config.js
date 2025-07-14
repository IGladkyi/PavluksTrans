module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
          "@components": ["./src/components"],
          "@features": ["./src/features"],
          "@navigation": ["./src/navigation"],
          "@store": ["./src/store"],
          "@styles": ["./src/styles"],
          "@utils": ["./src/utils"],
          "@hooks": ["./src/hooks"],
          "@assets": ["./src/assets"],
          "@i18n": ["./src/i18n"],
        },
      },
    ],
  ],
}
