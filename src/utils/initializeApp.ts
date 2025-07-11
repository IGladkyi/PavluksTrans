import AsyncStorage from '@react-native-async-storage/async-storage';

export const initializeApp = async () => {
  try {
    // Simulate some initialization tasks
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check for stored authentication token
    const token = await AsyncStorage.getItem('auth_token');
    const userData = await AsyncStorage.getItem('user_data');
    
    return {
      hasStoredAuth: !!token && !!userData,
      token,
      userData: userData ? JSON.parse(userData) : null,
    };
  } catch (error) {
    console.error('Error during app initialization:', error);
    return {
      hasStoredAuth: false,
      token: null,
      userData: null,
    };
  }
}; 