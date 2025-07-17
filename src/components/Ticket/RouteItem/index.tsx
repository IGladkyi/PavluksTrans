import { LocationDotIcon } from "@/assets/svg"
import colors from "@/styles/colors"
import { fontFamilies } from "@/styles/theme"
import { StyleSheet, Text, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

export const RouteItem = ({
  time,
  location,
}: {
  time: string
  location: string
}) => {
  return (
    <View style={styles.routeItem}>
      <LocationDotIcon width={moderateScale(16)} height={moderateScale(16)} />
      <View style={styles.routeDetails}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  routeItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
  },
  routeDetails: {
    flex: 1,
  },
  time: {
    ...fontFamilies.interBold14,
    color: colors.mainBlack,
  },
  location: {
    ...fontFamilies.interRegular14,
    color: colors.mainBlack,
  },
})
