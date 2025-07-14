# PavluksTrans

A React Native application with Redux state management, Redux Persist for data persistence, and React Navigation for routing.

## Features

- **Redux Toolkit**: Modern Redux with simplified setup and TypeScript support
- **Redux Persist**: Automatic state persistence using AsyncStorage
- **React Navigation**: Stack and Tab navigation with authentication flow
- **TypeScript**: Full TypeScript support for better development experience

## Getting Started

### Prerequisites

- Node.js >= 18
- React Native CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Install iOS dependencies:

```bash
cd ios && pod install
```

3. Start the Metro bundler:

```bash
npm start
```

4. Run the app:

For iOS:

```bash
npm run ios
```

For Android:

```bash
npm run android
```

## Available Scripts

- `npm start`: Start Metro bundler
- `npm run ios`: Run on iOS simulator
- `npm run android`: Run on Android emulator
- `npm test`: Run tests
- `npm run lint`: Run ESLint

## Dependencies

### Core Dependencies

- `@react-navigation/native`: Core navigation library
- `@react-navigation/stack`: Stack navigation
- `@react-navigation/bottom-tabs`: Tab navigation
- `@reduxjs/toolkit`: Modern Redux toolkit
- `react-redux`: React bindings for Redux
- `redux-persist`: State persistence
- `@react-native-async-storage/async-storage`: AsyncStorage for persistence

### Navigation Dependencies

- `react-native-screens`: Native screen components
- `react-native-safe-area-context`: Safe area handling
- `react-native-gesture-handler`: Gesture handling

### Common Issues

1. **Metro bundler issues**: Clear cache with `npm start -- --reset-cache`
2. **iOS build issues**: Clean build folder and reinstall pods
3. **Android build issues**: Clean project and rebuild

### Debugging

- Use React Native Debugger for Redux DevTools
- Enable remote debugging in the simulator/emulator
- Check Metro bundler logs for detailed error messages
