import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideSplashScreen, loginSuccess } from '../store/slices/authSlice';
import { initializeApp } from '../utils/initializeApp';

export const useSplashScreen = () => {
  const dispatch = useDispatch();
  const [isInitializing, setIsInitializing] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const initialize = async () => {
      try {
        setProgress(25);
        
        // Initialize app
        const result = await initializeApp();
        setProgress(75);
        
        // If we have stored auth data, restore the session
        if (result.hasStoredAuth && result.userData && result.token) {
          dispatch(loginSuccess({
            user: result.userData,
            token: result.token,
          }));
        }
        
        setProgress(100);
        setIsInitializing(false);
        
        // Hide splash screen after a minimum delay
        setTimeout(() => {
          dispatch(hideSplashScreen());
        }, 1000);
      } catch (error) {
        console.error('Initialization error:', error);
        setIsInitializing(false);
        setProgress(100);
        setTimeout(() => {
          dispatch(hideSplashScreen());
        }, 1000);
      }
    };

    initialize();
  }, [dispatch]);

  return {
    isInitializing,
    progress,
  };
}; 