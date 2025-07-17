import { StyleProp, View, ViewStyle } from "react-native"
import { moderateScale } from "react-native-size-matters"
import { StyleSheet } from "react-native"
import colors from "@/styles/colors"

export const GrayCircle = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return <View style={[styles.container, style]} />
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: moderateScale(25),
    height: moderateScale(25),
    backgroundColor: colors.mainGray,
    borderRadius: moderateScale(25),
    zIndex: 1,
  },
})
