import Config from "react-native-config"

// Example configuration object using React Native Config
export const AppConfig = {
  // API Configuration
  apiBaseUrl: Config.API_BASE_URL || "https://api.example.com",
  apiVersion: Config.API_VERSION || "v1",

  // App Configuration
  appName: Config.APP_NAME || "PavluksTrans",
  appVersion: Config.APP_VERSION || "1.0.0",

  // Feature Flags
  enableAnalytics: Config.ENABLE_ANALYTICS === "true",
  enablePushNotifications: Config.ENABLE_PUSH_NOTIFICATIONS === "true",

  // Development
  debugMode: Config.DEBUG_MODE === "true",
}

// Helper function to get environment variable with fallback
export const getConfig = (key: string, fallback?: string): string => {
  return Config[key] || fallback || ""
}

// Helper function to get boolean environment variable
export const getBooleanConfig = (
  key: string,
  fallback: boolean = false
): boolean => {
  return Config[key] === "true" || fallback
}

export default AppConfig
