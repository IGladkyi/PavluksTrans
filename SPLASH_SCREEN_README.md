# Splash Screen Implementation

This document describes the splash screen implementation for the PavluksTrans React Native app.

## Overview

The splash screen provides a smooth loading experience while the app initializes and checks for stored authentication data. It includes:

- Animated logo and branding
- Progress bar showing initialization progress
- Automatic authentication restoration
- Smooth transitions to the main app

## Components

### 1. SplashScreen Component (`src/screens/SplashScreen.tsx`)
- Main splash screen UI with animations
- Shows app logo, name, and tagline
- Displays progress bar and loading indicator
- Uses custom hook for initialization logic

### 2. useSplashScreen Hook (`src/hooks/useSplashScreen.ts`)
- Manages splash screen state and initialization
- Handles authentication restoration
- Provides progress updates
- Automatically hides splash screen when ready

### 3. initializeApp Utility (`src/utils/initializeApp.ts`)
- Performs app initialization tasks
- Checks for stored authentication data
- Simulates loading time for smooth UX

## Features

### Animations
- Fade-in animation for content
- Scale animation for logo
- Slide-up animation for text elements
- Smooth transitions using React Native Animated API

### Authentication Restoration
- Automatically checks for stored auth tokens
- Restores user session if valid data exists
- Seamlessly transitions to authenticated or login state

### Progress Tracking
- Real-time progress updates during initialization
- Visual progress bar with percentage
- Different loading states (Initializing/Loading)

## Customization

### Colors
Update the color scheme in `SplashScreen.tsx`:
```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // Background color
  },
  logo: {
    backgroundColor: '#007AFF', // Logo background
  },
  progressFill: {
    backgroundColor: '#007AFF', // Progress bar color
  },
});
```

### Timing
Adjust initialization timing in `useSplashScreen.ts`:
```typescript
// Minimum splash screen duration
setTimeout(() => {
  dispatch(hideSplashScreen());
}, 1000); // Change this value
```

### Logo and Branding
Replace the logo placeholder in `SplashScreen.tsx`:
```typescript
<View style={styles.logo}>
  {/* Replace with your actual logo */}
  <Text style={styles.logoText}>PT</Text>
</View>
```

## Integration

The splash screen is integrated into the navigation flow:

1. App starts with splash screen visible
2. Initialization tasks run in background
3. Authentication state is checked/restored
4. Splash screen automatically hides
5. User is directed to Login or Main screen

## State Management

The splash screen state is managed in Redux:
- `isSplashScreenVisible`: Controls splash screen visibility
- `isAuthenticated`: Determines post-splash navigation
- `hideSplashScreen()`: Action to hide splash screen

## Performance Considerations

- Uses `useNativeDriver: true` for smooth animations
- Minimal re-renders with proper dependency arrays
- Efficient state management with Redux
- Async initialization to prevent blocking UI

## Troubleshooting

### Splash Screen Stuck
- Check if `hideSplashScreen()` action is dispatched
- Verify initialization tasks complete successfully
- Ensure no errors in console

### Authentication Not Restored
- Verify AsyncStorage keys match expected format
- Check if stored data is valid JSON
- Ensure proper error handling in initialization

### Animation Issues
- Verify `useNativeDriver: true` is set
- Check for proper cleanup in useEffect
- Ensure animations don't conflict with navigation 