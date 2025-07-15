module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.js",
          ".android.js",
          ".ios.jsx",
          ".android.jsx",
          ".js",
          ".jsx",
          ".json",
          ".ts",
          ".tsx",
        ],
        root: ["."],
        alias: {
          "@": "./src",
          "@components": ["./src/components"],
          "@screens": ["./src/screens"],
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
