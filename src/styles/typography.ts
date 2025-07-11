import { Platform } from 'react-native';

// Font families
export const fontFamily = {
  // Primary font family
  primary: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Secondary font family (for headings)
  secondary: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Monospace font family
  monospace: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'monospace',
  }),
} as const;

// Font weights
export const fontWeight = {
  thin: '100' as const,
  extraLight: '200' as const,
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
  extraBold: '800' as const,
  black: '900' as const,
} as const;

// Font sizes
export const fontSize = {
  // Display sizes
  displayLarge: 57,
  displayMedium: 45,
  displaySmall: 36,
  
  // Headline sizes
  headlineLarge: 32,
  headlineMedium: 28,
  headlineSmall: 24,
  
  // Title sizes
  titleLarge: 22,
  titleMedium: 16,
  titleSmall: 14,
  
  // Body sizes
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,
  
  // Label sizes
  labelLarge: 14,
  labelMedium: 12,
  labelSmall: 11,
  
  // Caption sizes
  caption: 12,
  overline: 10,
} as const;

// Line heights
export const lineHeight = {
  // Display line heights
  displayLarge: 64,
  displayMedium: 52,
  displaySmall: 44,
  
  // Headline line heights
  headlineLarge: 40,
  headlineMedium: 36,
  headlineSmall: 32,
  
  // Title line heights
  titleLarge: 28,
  titleMedium: 24,
  titleSmall: 20,
  
  // Body line heights
  bodyLarge: 24,
  bodyMedium: 20,
  bodySmall: 16,
  
  // Label line heights
  labelLarge: 20,
  labelMedium: 16,
  labelSmall: 16,
  
  // Caption line heights
  caption: 16,
  overline: 16,
} as const;

// Letter spacing
export const letterSpacing = {
  displayLarge: 0.25,
  displayMedium: 0,
  displaySmall: 0,
  
  headlineLarge: 0,
  headlineMedium: 0,
  headlineSmall: 0,
  
  titleLarge: 0,
  titleMedium: 0.15,
  titleSmall: 0.1,
  
  bodyLarge: 0.5,
  bodyMedium: 0.25,
  bodySmall: 0.4,
  
  labelLarge: 0.1,
  labelMedium: 0.5,
  labelSmall: 0.5,
  
  caption: 0.4,
  overline: 1.5,
} as const;

// Typography styles
export const typography = {
  // Display styles
  displayLarge: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.displayLarge,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.displayLarge,
    letterSpacing: letterSpacing.displayLarge,
  },
  
  displayMedium: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.displayMedium,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.displayMedium,
    letterSpacing: letterSpacing.displayMedium,
  },
  
  displaySmall: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.displaySmall,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.displaySmall,
    letterSpacing: letterSpacing.displaySmall,
  },
  
  // Headline styles
  headlineLarge: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.headlineLarge,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.headlineLarge,
    letterSpacing: letterSpacing.headlineLarge,
  },
  
  headlineMedium: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.headlineMedium,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.headlineMedium,
    letterSpacing: letterSpacing.headlineMedium,
  },
  
  headlineSmall: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.headlineSmall,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.headlineSmall,
    letterSpacing: letterSpacing.headlineSmall,
  },
  
  // Title styles
  titleLarge: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.titleLarge,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.titleLarge,
    letterSpacing: letterSpacing.titleLarge,
  },
  
  titleMedium: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.titleMedium,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.titleMedium,
    letterSpacing: letterSpacing.titleMedium,
  },
  
  titleSmall: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.titleSmall,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.titleSmall,
    letterSpacing: letterSpacing.titleSmall,
  },
  
  // Body styles
  bodyLarge: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.bodyLarge,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.bodyLarge,
    letterSpacing: letterSpacing.bodyLarge,
  },
  
  bodyMedium: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.bodyMedium,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.bodyMedium,
    letterSpacing: letterSpacing.bodyMedium,
  },
  
  bodySmall: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.bodySmall,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.bodySmall,
    letterSpacing: letterSpacing.bodySmall,
  },
  
  // Label styles
  labelLarge: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.labelLarge,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.labelLarge,
    letterSpacing: letterSpacing.labelLarge,
  },
  
  labelMedium: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.labelMedium,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.labelMedium,
    letterSpacing: letterSpacing.labelMedium,
  },
  
  labelSmall: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.labelSmall,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.labelSmall,
    letterSpacing: letterSpacing.labelSmall,
  },
  
  // Caption styles
  caption: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.caption,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.caption,
    letterSpacing: letterSpacing.caption,
  },
  
  overline: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.overline,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.overline,
    letterSpacing: letterSpacing.overline,
  },
} as const;

// Helper function to create custom typography
export const createTypography = (
  size: number,
  weight: keyof typeof fontWeight = 'regular',
  family: keyof typeof fontFamily = 'primary',
  customLineHeight?: number,
  customLetterSpacing?: number
) => ({
  fontFamily: fontFamily[family],
  fontSize: size,
  fontWeight: fontWeight[weight],
  lineHeight: customLineHeight || size * 1.2,
  letterSpacing: customLetterSpacing || 0,
});

// Type exports
export type FontFamily = keyof typeof fontFamily;
export type FontWeight = keyof typeof fontWeight;
export type FontSize = keyof typeof fontSize;
export type TypographyStyle = keyof typeof typography; 