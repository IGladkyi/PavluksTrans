import { colors, darkColors, withOpacity } from './colors';
import { typography, fontFamily, fontWeight, fontSize } from './typography';
import { spacing, borderRadius, shadow, zIndex } from './spacing';

// Main theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadow,
  zIndex,
  fontFamily,
  fontWeight,
  fontSize,
} as const;

// Dark theme
export const darkTheme = {
  ...theme,
  colors: darkColors,
} as const;

// Theme type
export type Theme = typeof theme;
export type DarkTheme = typeof darkTheme;

// Common style combinations
export const commonStyles = {
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.surface.primary,
    borderRadius: borderRadius.card.medium,
    padding: spacing.card.padding,
    margin: spacing.card.margin,
    ...shadow.sm,
  },
  
  // Button styles
  button: {
    primary: {
      backgroundColor: colors.primary[500],
      borderRadius: borderRadius.button.medium,
      padding: spacing.button.padding,
      margin: spacing.button.margin,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    secondary: {
      backgroundColor: colors.surface.secondary,
      borderRadius: borderRadius.button.medium,
      padding: spacing.button.padding,
      margin: spacing.button.margin,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      borderWidth: 1,
      borderColor: colors.border.medium,
    },
    outline: {
      backgroundColor: 'transparent',
      borderRadius: borderRadius.button.medium,
      padding: spacing.button.padding,
      margin: spacing.button.margin,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      borderWidth: 1,
      borderColor: colors.primary[500],
    },
  },
  
  // Input styles
  input: {
    backgroundColor: colors.surface.primary,
    borderRadius: borderRadius.input.medium,
    padding: spacing.input.padding,
    margin: spacing.input.margin,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...typography.bodyMedium,
    color: colors.text.primary,
  },
  
  // Text styles
  text: {
    primary: {
      ...typography.bodyLarge,
      color: colors.text.primary,
    },
    secondary: {
      ...typography.bodyMedium,
      color: colors.text.secondary,
    },
    caption: {
      ...typography.caption,
      color: colors.text.tertiary,
    },
    heading: {
      ...typography.headlineMedium,
      color: colors.text.primary,
    },
    title: {
      ...typography.titleMedium,
      color: colors.text.primary,
    },
  },
  
  // Layout styles
  layout: {
    row: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
    },
    column: {
      flexDirection: 'column' as const,
    },
    center: {
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    spaceBetween: {
      justifyContent: 'space-between' as const,
    },
    spaceAround: {
      justifyContent: 'space-around' as const,
    },
  },
  
  // Spacing utilities
  spacing: {
    p: (size: keyof typeof spacing | number) => ({
      padding: typeof size === 'number' ? size : spacing[size],
    }),
    px: (size: keyof typeof spacing | number) => ({
      paddingHorizontal: typeof size === 'number' ? size : spacing[size],
    }),
    py: (size: keyof typeof spacing | number) => ({
      paddingVertical: typeof size === 'number' ? size : spacing[size],
    }),
    m: (size: keyof typeof spacing | number) => ({
      margin: typeof size === 'number' ? size : spacing[size],
    }),
    mx: (size: keyof typeof spacing | number) => ({
      marginHorizontal: typeof size === 'number' ? size : spacing[size],
    }),
    my: (size: keyof typeof spacing | number) => ({
      marginVertical: typeof size === 'number' ? size : spacing[size],
    }),
  },
} as const;

// Helper function to create themed styles
export const createThemedStyles = (theme: Theme) => ({
  ...commonStyles,
  colors: theme.colors,
  typography: theme.typography,
});

// Export individual style systems
export { colors, darkColors, withOpacity } from './colors';
export { typography, fontFamily, fontWeight, fontSize } from './typography';
export { spacing, borderRadius, shadow, zIndex } from './spacing';

// Default export
export default theme; 