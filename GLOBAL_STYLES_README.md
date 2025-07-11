# Global Styles System

This document describes the comprehensive global styles system for the PavluksTrans React Native app, including colors, typography, spacing, and common style combinations.

## 🎨 Color System

### Primary Colors
```typescript
import { colors } from '../styles';

// Primary color palette (50-900)
colors.primary[500] // Main primary color: #2196F3
colors.primary[100] // Light variant: #BBDEFB
colors.primary[900] // Dark variant: #0D47A1
```

### Semantic Colors
```typescript
// Success colors
colors.success[500] // #4CAF50

// Warning colors
colors.warning[500] // #FFC107

// Error colors
colors.error[500] // #F44336

// Info colors
colors.info[500] // #03A9F4
```

### Text Colors
```typescript
colors.text.primary    // #1A1A1A
colors.text.secondary  // #666666
colors.text.tertiary   // #999999
colors.text.disabled   // #CCCCCC
colors.text.inverse    // #FFFFFF
```

### Background & Surface Colors
```typescript
colors.background.primary   // #FFFFFF
colors.background.secondary // #F8F9FA
colors.surface.primary      // #FFFFFF
colors.surface.secondary    // #F8F9FA
```

### Helper Functions
```typescript
import { withOpacity } from '../styles';

// Add opacity to any color
withOpacity(colors.primary[500], 0.5) // rgba(33, 150, 243, 0.5)
```

## 📝 Typography System

### Font Families
```typescript
import { fontFamily } from '../styles';

fontFamily.primary   // System/Roboto
fontFamily.secondary // System/Roboto
fontFamily.monospace // Menlo/monospace
```

### Font Weights
```typescript
import { fontWeight } from '../styles';

fontWeight.thin       // 100
fontWeight.light      // 300
fontWeight.regular    // 400
fontWeight.medium     // 500
fontWeight.semiBold   // 600
fontWeight.bold       // 700
fontWeight.black      // 900
```

### Typography Styles
```typescript
import { typography } from '../styles';

// Display styles
typography.displayLarge   // 57px
typography.displayMedium  // 45px
typography.displaySmall   // 36px

// Headline styles
typography.headlineLarge  // 32px
typography.headlineMedium // 28px
typography.headlineSmall  // 24px

// Title styles
typography.titleLarge     // 22px
typography.titleMedium    // 16px
typography.titleSmall     // 14px

// Body styles
typography.bodyLarge      // 16px
typography.bodyMedium     // 14px
typography.bodySmall      // 12px

// Label styles
typography.labelLarge     // 14px
typography.labelMedium    // 12px
typography.labelSmall     // 11px

// Caption styles
typography.caption        // 12px
typography.overline       // 10px
```

### Custom Typography
```typescript
import { createTypography } from '../styles';

const customStyle = createTypography(
  18,                    // size
  'medium',              // weight
  'primary',             // family
  24,                    // lineHeight (optional)
  0.5                    // letterSpacing (optional)
);
```

## 📏 Spacing System

### Base Spacing
```typescript
import { spacing } from '../styles';

spacing.xs    // 4px
spacing.sm    // 8px
spacing.md    // 16px
spacing.lg    // 24px
spacing.xl    // 32px
spacing.xxl   // 48px
spacing.xxxl  // 64px
```

### Component-Specific Spacing
```typescript
spacing.component.xs  // 4px
spacing.component.md  // 12px
spacing.component.lg  // 16px

spacing.layout.xs     // 8px
spacing.layout.md     // 24px
spacing.layout.lg     // 32px

spacing.screen.horizontal // 16px
spacing.screen.vertical   // 24px
spacing.screen.safeArea   // 20px
```

### Border Radius
```typescript
import { borderRadius } from '../styles';

borderRadius.none  // 0
borderRadius.xs    // 4px
borderRadius.sm    // 8px
borderRadius.md    // 12px
borderRadius.lg    // 16px
borderRadius.xl    // 20px
borderRadius.full  // 9999px

// Component-specific
borderRadius.button.small  // 6px
borderRadius.card.medium   // 12px
borderRadius.input.medium  // 8px
```

### Shadows
```typescript
import { shadow } from '../styles';

shadow.none  // No shadow
shadow.xs    // Light shadow
shadow.sm    // Small shadow
shadow.md    // Medium shadow
shadow.lg    // Large shadow
shadow.xl    // Extra large shadow
```

## 🎯 Common Styles

### Container Styles
```typescript
import { commonStyles } from '../styles';

commonStyles.container // Full screen container
commonStyles.card      // Card with shadow and padding
```

### Button Styles
```typescript
commonStyles.button.primary   // Primary button
commonStyles.button.secondary // Secondary button
commonStyles.button.outline   // Outline button
```

### Input Styles
```typescript
commonStyles.input // Standard input styling
```

### Text Styles
```typescript
commonStyles.text.primary   // Primary text
commonStyles.text.secondary // Secondary text
commonStyles.text.caption   // Caption text
commonStyles.text.heading   // Heading text
commonStyles.text.title     // Title text
```

### Layout Styles
```typescript
commonStyles.layout.row          // Horizontal layout
commonStyles.layout.column       // Vertical layout
commonStyles.layout.center       // Centered layout
commonStyles.layout.spaceBetween // Space between items
commonStyles.layout.spaceAround  // Space around items
```

### Spacing Utilities
```typescript
commonStyles.spacing.p(16)   // padding: 16
commonStyles.spacing.px(16)  // paddingHorizontal: 16
commonStyles.spacing.py(16)  // paddingVertical: 16
commonStyles.spacing.m(16)   // margin: 16
commonStyles.spacing.mx(16)  // marginHorizontal: 16
commonStyles.spacing.my(16)  // marginVertical: 16
```

## 🔧 Usage Examples

### Basic Component Styling
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadow } from '../styles';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    ...shadow.sm,
  },
  title: {
    ...typography.headlineMedium,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
});
```

### Using Common Styles
```typescript
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles, colors, typography } from '../styles';

const MyScreen = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.card}>
        <Text style={commonStyles.text.heading}>Card Title</Text>
        <Text style={commonStyles.text.secondary}>Card content</Text>
      </View>
      
      <TouchableOpacity style={commonStyles.button.primary}>
        <Text style={[typography.labelLarge, { color: colors.text.inverse }]}>
          Primary Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};
```

### Dark Theme Support
```typescript
import { darkTheme } from '../styles';

// Use dark theme colors
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.colors.background.primary,
  },
});
```

## 🎨 Theme Customization

### Creating Custom Themes
```typescript
import { createThemedStyles } from '../styles';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      ...theme.colors.primary,
      500: '#FF6B6B', // Custom primary color
    },
  },
};

const customStyles = createThemedStyles(customTheme);
```

### Responsive Design
```typescript
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

const responsiveSpacing = isTablet ? spacing.lg : spacing.md;
```

## 📱 Best Practices

### 1. Use Design System Values
✅ **Good:**
```typescript
padding: spacing.md
color: colors.primary[500]
fontSize: typography.bodyMedium.fontSize
```

❌ **Avoid:**
```typescript
padding: 16
color: '#2196F3'
fontSize: 14
```

### 2. Consistent Spacing
✅ **Good:**
```typescript
marginBottom: spacing.sm
paddingHorizontal: spacing.md
```

❌ **Avoid:**
```typescript
marginBottom: 8
paddingHorizontal: 16
```

### 3. Semantic Color Usage
✅ **Good:**
```typescript
color: colors.text.primary
backgroundColor: colors.background.primary
borderColor: colors.border.light
```

❌ **Avoid:**
```typescript
color: '#1A1A1A'
backgroundColor: '#FFFFFF'
borderColor: '#E0E0E0'
```

### 4. Typography Hierarchy
✅ **Good:**
```typescript
title: typography.headlineMedium
subtitle: typography.titleMedium
body: typography.bodyMedium
caption: typography.caption
```

## 🔄 Migration Guide

### From Hardcoded Values
**Before:**
```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
});
```

**After:**
```typescript
import { colors, spacing, borderRadius, typography, fontWeight } from '../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
  },
  title: {
    ...typography.headlineSmall,
    fontWeight: fontWeight.bold,
    color: colors.text.primary,
  },
});
```

This global styles system provides a consistent, maintainable, and scalable approach to styling your React Native app. Use these design tokens to ensure visual consistency across all components and screens. 