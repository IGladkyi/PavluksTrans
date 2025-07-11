// Spacing system for consistent layout
export const spacing = {
  // Base spacing unit (4px)
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  
  // Component-specific spacing
  component: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  
  // Layout spacing
  layout: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 64,
  },
  
  // Screen spacing
  screen: {
    horizontal: 16,
    vertical: 24,
    safeArea: 20,
  },
  
  // Button spacing
  button: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  
  // Card spacing
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 12,
  },
  
  // Input spacing
  input: {
    padding: 12,
    margin: 8,
    borderRadius: 8,
  },
  
  // List spacing
  list: {
    itemPadding: 16,
    itemMargin: 0,
    sectionPadding: 8,
  },
  
  // Navigation spacing
  navigation: {
    headerPadding: 16,
    tabBarPadding: 8,
  },
} as const;

// Border radius values
export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 9999,
  
  // Component-specific border radius
  button: {
    small: 6,
    medium: 8,
    large: 12,
  },
  
  card: {
    small: 8,
    medium: 12,
    large: 16,
  },
  
  input: {
    small: 6,
    medium: 8,
    large: 12,
  },
  
  avatar: {
    small: 16,
    medium: 24,
    large: 32,
    full: 9999,
  },
} as const;

// Shadow values
export const shadow = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
} as const;

// Z-index values
export const zIndex = {
  base: 0,
  card: 1,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
  toast: 700,
  overlay: 800,
  modalOverlay: 900,
} as const;

// Helper functions
export const getSpacing = (size: keyof typeof spacing | number): number => {
  if (typeof size === 'number') return size;
  const spacingValue = spacing[size];
  return typeof spacingValue === 'number' ? spacingValue : spacing.md;
};

export const getBorderRadius = (size: keyof typeof borderRadius | number): number => {
  if (typeof size === 'number') return size;
  const borderRadiusValue = borderRadius[size];
  return typeof borderRadiusValue === 'number' ? borderRadiusValue : borderRadius.md;
};

export const getShadow = (size: keyof typeof shadow) => {
  return shadow[size];
};

export const getZIndex = (level: keyof typeof zIndex) => {
  return zIndex[level];
};

// Type exports
export type SpacingSize = keyof typeof spacing;
export type BorderRadiusSize = keyof typeof borderRadius;
export type ShadowSize = keyof typeof shadow;
export type ZIndexLevel = keyof typeof zIndex; 