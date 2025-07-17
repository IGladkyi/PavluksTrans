import colors from "@/styles/colors"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { moderateScale } from "react-native-size-matters"

const Divider = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return <View style={[styles.divider, style]} />
}

export default Divider

const styles = StyleSheet.create({
  divider: {
    height: moderateScale(1),
    backgroundColor: colors.mainBorder,
  },
})
