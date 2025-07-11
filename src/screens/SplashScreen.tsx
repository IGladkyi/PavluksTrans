import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useSplashScreen } from '../hooks/useSplashScreen';
import { colors, typography, spacing, borderRadius, shadow, fontWeight } from '../styles';

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const { isInitializing, progress } = useSplashScreen();
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.3);
  const slideAnim = new Animated.Value(50);

  useEffect(() => {
    // Animate the splash screen elements
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim },
            ],
          },
        ]}
      >
        {/* Logo/Icon */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>PT</Text>
          </View>
        </View>

        {/* App Name */}
        <Text style={styles.appName}>PavluksTrans</Text>
        <Text style={styles.tagline}>Your Transportation Partner</Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{progress}%</Text>
        </View>

        {/* Loading Indicator */}
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>
            {isInitializing ? 'Initializing...' : 'Loading...'}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: spacing.xl,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow.md,
  },
  logoText: {
    ...typography.headlineLarge,
    fontWeight: fontWeight.bold,
    color: colors.text.inverse,
  },
  appName: {
    ...typography.headlineLarge,
    fontWeight: fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  tagline: {
    ...typography.bodyMedium,
    color: colors.text.secondary,
    marginBottom: spacing.xxxl,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  loadingText: {
    marginTop: spacing.sm,
    ...typography.bodySmall,
    color: colors.text.secondary,
  },
  progressContainer: {
    width: 200,
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: colors.neutral[300],
    borderRadius: borderRadius.xs,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary[500],
    borderRadius: borderRadius.xs,
  },
  progressText: {
    marginTop: spacing.sm,
    ...typography.labelSmall,
    color: colors.text.secondary,
    fontWeight: fontWeight.medium,
  },
});

export default SplashScreen; 