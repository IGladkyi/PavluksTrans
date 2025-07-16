import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { LogoIcon, NotificationIcon } from "@assets/svg"
import { moderateScale } from "react-native-size-matters"
import colors from "@styles/colors"

const NotificationLogoHeader = () => {
  return (
    <View style={styles.container}>
      <LogoIcon width={moderateScale(160)} height={moderateScale(20)} />
      <TouchableOpacity>
        <NotificationIcon
          width={moderateScale(20)}
          height={moderateScale(24)}
          color={colors.mainDark}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NotificationLogoHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
})
