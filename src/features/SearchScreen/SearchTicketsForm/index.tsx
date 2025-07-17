import {
  CalendarIcon,
  LocationDotIcon,
  PassengersIcon,
  SwapIcon,
} from "@/assets/svg"
import colors from "@/styles/colors"
import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { moderateScale } from "react-native-size-matters"
import { useTranslation } from "react-i18next"
import { fontFamilies } from "@/styles/theme"
import CustomButton from "@/components/CustomButton"
import { NavigationProp, useNavigation } from "@react-navigation/native"

const SearchTickets = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<NavigationProp<any>>()
  const [fromLocation, setFromLocation] = useState(
    "Київ (метро Академмістечко)"
  )
  const [toLocation, setToLocation] = useState(
    "Варшава - Ф. Шопена аеропорт..."
  )
  const [travelDate, setTravelDate] = useState("08.02.2025")
  const [passengers, setPassengers] = useState("3 пасажира")

  const swapLocations = () => {
    const temp = fromLocation
    setFromLocation(toLocation)
    setToLocation(temp)
  }

  return (
    <View style={styles.container}>
      {/* From Location */}
      <View style={styles.locationsContainer}>
        <TouchableOpacity style={styles.inputContainer}>
          <LocationDotIcon
            width={moderateScale(16)}
            height={moderateScale(16)}
          />
          <View>
            <Text style={styles.label}>{t("from")}</Text>
            <Text style={styles.value}>{fromLocation}</Text>
          </View>
        </TouchableOpacity>

        {/* To Location */}

        <TouchableOpacity style={styles.inputContainer}>
          <LocationDotIcon
            width={moderateScale(16)}
            height={moderateScale(16)}
          />
          <View>
            <Text style={styles.label}>{t("to")}</Text>
            <Text style={styles.value}>{toLocation}</Text>
          </View>
        </TouchableOpacity>

        {/* Swap Button */}
        <TouchableOpacity style={styles.swapContainer} onPress={swapLocations}>
          <SwapIcon width={moderateScale(35)} height={moderateScale(35)} />
        </TouchableOpacity>

        {/* Travel Date */}
        <TouchableOpacity style={styles.inputContainer}>
          <CalendarIcon
            width={moderateScale(16.1)}
            height={moderateScale(16)}
          />
          <View>
            <Text style={styles.label}>{t("travel date")}</Text>
            <Text style={styles.value}>{travelDate}</Text>
          </View>
        </TouchableOpacity>

        {/* Number of Passengers */}
        <TouchableOpacity style={styles.inputContainer}>
          <PassengersIcon
            width={moderateScale(16.1)}
            height={moderateScale(17)}
          />
          <View>
            <Text style={styles.label}>{t("number of people")}</Text>
            <Text style={styles.value}>{passengers}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <CustomButton
        title={t("find a ticket")}
        onPress={() => navigation.navigate("SearchTicketsResult")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(20),
  },
  locationsContainer: {
    gap: moderateScale(8),
  },
  inputContainer: {
    maxHeight: moderateScale(56),
    borderRadius: moderateScale(16),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(18),
    borderWidth: 1,
    borderColor: colors.mainBorder,

    position: "relative",
  },
  label: {
    ...fontFamilies.interRegular12,
    color: colors.darkGray,
  },
  value: {
    ...fontFamilies.interBold14,
    color: colors.mainDark,
  },
  swapContainer: {
    position: "absolute",
    right: moderateScale(12),
    top: moderateScale(42),
  },
})

export default SearchTickets
