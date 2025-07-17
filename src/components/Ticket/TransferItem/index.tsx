import LocationDotLine from "@/assets/svg/LocationDotLine"
import colors from "@/styles/colors"
import { fontFamilies } from "@/styles/theme"
import { StyleSheet, Text, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

export const TransferItem = ({
  time,
  location,
}: {
  time: string
  location: string
}) => {
  return (
    <View style={styles.transferItem}>
      <LocationDotLine
        width={moderateScale(1)}
        height={moderateScale(60)}
        color={colors.mainBorder}
      />
      <View style={styles.transferDetails}>
        <Text style={styles.transferTime}>{time}</Text>
        <Text style={styles.transferLocation}>{location}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  transferItem: {
    marginLeft: moderateScale(8),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(28),
  },
  transferDetails: {
    flexDirection: "column",
    gap: moderateScale(3),
  },
  transferTime: {
    ...fontFamilies.interRegular12,
    color: colors.mainBlack,
  },
  transferLocation: {
    ...fontFamilies.interRegular12,
    color: colors.mainBlack,
  },
})
