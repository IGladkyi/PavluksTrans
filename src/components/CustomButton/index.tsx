import colors from "@/styles/colors"
import { fontFamilies } from "@/styles/theme"
import React from "react"
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native"
import { moderateScale } from "react-native-size-matters"

type Variant = "default" | "outline"

interface CustomButtonProps {
  title: string
  onPress: (event: GestureResponderEvent) => void
  variant?: Variant
  color?: string
  style?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
  loading?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = "default",
  color,
  style,
  textStyle,
  disabled = false,
  loading = false,
}) => {
  const isOutline = variant === "outline"
  const isDisabled = disabled || loading

  return (
    <TouchableOpacity
      onPress={onPress}
      //       activeOpacity={0.8}
      disabled={isDisabled}
      style={[
        styles.button,
        {
          backgroundColor: isOutline ? colors.mainGray : colors.mainRed,
          borderColor: isOutline ? colors.mainRedLight : colors.mainRed,
          borderWidth: isOutline ? 1 : 0,
          opacity: isDisabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: isOutline ? colors.mainBlack : colors.white,
              ...(isOutline
                ? fontFamilies.interRegular14
                : fontFamilies.interBold14),
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    width: "100%",
    minHeight: moderateScale(52),
    borderRadius: moderateScale(50),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
})
