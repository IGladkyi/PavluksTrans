// Main theme exports
export { default as theme, darkTheme, commonStyles, createThemedStyles } from './theme';
export type { Theme, DarkTheme } from './theme';

// Color system
export { colors, darkColors, withOpacity } from './colors';
export type { ColorKey, PrimaryColorKey, SecondaryColorKey, NeutralColorKey } from './colors';

// Typography system
export { 
  typography, 
  fontFamily, 
  fontWeight, 
  fontSize,
  createTypography 
} from './typography';
export type { 
  FontFamily, 
  FontWeight, 
  FontSize, 
  TypographyStyle 
} from './typography';

// Spacing system
export { 
  spacing, 
  borderRadius, 
  shadow, 
  zIndex,
  getSpacing,
  getBorderRadius,
  getShadow,
  getZIndex
} from './spacing';
export type { 
  SpacingSize, 
  BorderRadiusSize, 
  ShadowSize, 
  ZIndexLevel 
} from './spacing';

// Re-export everything from theme for convenience
export * from './theme'; 