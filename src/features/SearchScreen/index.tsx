import React, { useState } from "react"
import { fontFamilies, helpers } from "@styles/theme"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import { moderateScale } from "react-native-size-matters"
import { useTranslation } from "react-i18next"
import NotificationLogoHeader from "@/features/SearchScreen/NotificationLogoHeader"
import ToggleButtons from "@/components/ToggleButtons"
import colors from "@styles/colors"
import SearchTickets from "./SearchTickets"

const SearchScreen = () => {
  const { t } = useTranslation()
  const [tripType, setTripType] = useState<string>("oneWay")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* LogoHeader */}
        <NotificationLogoHeader />

        {/* Promo banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>
            {t("promo.promoText1")}{" "}
            <Text style={styles.promoHighlight}>{t("promo.promoText2")}</Text>{" "}
            {t("promo.promoText3")}
          </Text>
        </View>

        {/* Search container */}
        <View style={styles.searchContainerWrapper}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchTitle}>{t("search tickets")}</Text>
            <View style={helpers.mb20}>
              <ToggleButtons
                leftButtonText="oneWay"
                rightButtonText="roundTrip"
                selected={tripType}
                setSelected={setTripType}
              />
            </View>
            <SearchTickets />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  promoBanner: {
    backgroundColor: colors.mainRedLight,
    padding: moderateScale(15),
  },
  promoText: {
    ...fontFamilies.interRegular14,
    color: colors.white,
  },
  promoHighlight: {
    ...fontFamilies.interBold14,
    color: colors.white,
  },
  searchContainerWrapper: {
    backgroundColor: colors.mainRed,
  },
  searchContainer: {
    height: "100%",
    backgroundColor: colors.mainGray,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(36),
  },
  searchTitle: {
    ...fontFamilies.interSemiBold24,
    color: colors.black,
    marginBottom: moderateScale(20),
  },
})

export default SearchScreen
