# PavluksTrans

A React Native application with Redux state management, Redux Persist for data persistence, and React Navigation for routing.

## Features

- **Redux Toolkit**: Modern Redux with simplified setup and TypeScript support
- **Redux Persist**: Automatic state persistence using AsyncStorage
- **React Navigation**: Stack and Tab navigation with authentication flow
- **TypeScript**: Full TypeScript support for better development experience

## Project Structure

```
src/
├── components/          # Reusable UI components
├── navigation/          # Navigation configuration
│   ├── AppNavigator.tsx # Main app navigator with auth flow
│   └── MainTabNavigator.tsx # Tab navigator for authenticated users
├── screens/            # Screen components
│   ├── HomeScreen.tsx  # Home screen
│   ├── LoginScreen.tsx # Login screen
│   └── ProfileScreen.tsx # Profile screen
└── store/              # Redux store configuration
    ├── hooks.ts        # Typed Redux hooks
    ├── index.ts        # Store configuration with persist
    └── slices/         # Redux slices
        └── authSlice.ts # Authentication state management
```

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

## Authentication

The app includes a basic authentication flow:

- **Login Credentials**: Use `test@example.com` / `password` to login
- **State Persistence**: Authentication state is automatically persisted
- **Auto-logout**: Logout functionality available on Home and Profile screens

## Redux Store

The Redux store is configured with:

- **Redux Toolkit**: For simplified Redux setup
- **Redux Persist**: For state persistence
- **TypeScript**: Full type safety
- **AsyncStorage**: For data persistence

### Store Structure

```typescript
{
  auth: {
    user: User | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    token: string | null
  }
}
```

## Navigation

The app uses a two-level navigation structure:

1. **AppNavigator**: Handles authentication flow
   - Login screen (unauthenticated)
   - Main tab navigator (authenticated)

2. **MainTabNavigator**: Tab-based navigation for authenticated users
   - Home tab
   - Profile tab

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

## Development

### Adding New Screens

1. Create a new screen component in `src/screens/`
2. Add the screen to the appropriate navigator
3. Update TypeScript types if needed

### Adding New Redux Slices

1. Create a new slice in `src/store/slices/`
2. Add the slice to the root reducer in `src/store/index.ts`
3. Update the persist whitelist if needed

### Styling

The app uses React Native's StyleSheet API for styling. Common patterns:

- Consistent color scheme (primary: #007AFF, error: #FF3B30)
- Responsive design with flex layouts
- Shadow effects for cards and buttons

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npm start -- --reset-cache`
2. **iOS build issues**: Clean build folder and reinstall pods
3. **Android build issues**: Clean project and rebuild

### Debugging

- Use React Native Debugger for Redux DevTools
- Enable remote debugging in the simulator/emulator
- Check Metro bundler logs for detailed error messages
