import Divider from "@/components/Divider"
import {
  ArrowRightButtonIcon,
  BusChairIcon,
  CashbackIcon,
  ClockIcon,
  PavluksLogoIcon,
} from "@/assets/svg"
import colors from "@/styles/colors"
import { fontFamilies } from "@/styles/theme"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { moderateScale } from "react-native-size-matters"
import { RouteItem } from "./RouteItem"
import { TransferItem } from "./TransferItem"
import { useTranslation } from "react-i18next"
import TicketDotLineIcon from "@/assets/svg/TicketDotLineIcon"
import { GrayCircle } from "../GrayCircle"

const Ticket = () => {
  const { t } = useTranslation()
  return (
    <TouchableOpacity style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Duration */}
        <View style={styles.durationContainer}>
          <ClockIcon width={moderateScale(18)} height={moderateScale(18)} />
          <Text style={styles.duration}>15 год. 40 хв.</Text>
        </View>
        <Text style={styles.transfers}>1 пересадка</Text>
      </View>
      {/* Divider */}
      <Divider style={styles.divider} />
      {/* Route Details */}
      <View style={styles.routeContainer}>
        {/* Departure */}
        <RouteItem time="22:35" location="Київ - (метро Академмістечко)" />

        {/* Transfer */}
        <TransferItem time="9:30 - 11:00" location="Львів (пересадка 15 хв)" />

        {/* Arrival */}
        <RouteItem time="11:20" location="Варшава - (Ф. Шопена аеропорт)" />
      </View>
      {/* Divider */}
      <Divider style={styles.divider} />
      {/* Provider Info */}
      <View style={styles.providerContainer}>
        <View style={styles.providerInfo}>
          <Text style={styles.providerLabel}>{t("provider")}:</Text>
          <View style={styles.providerBrand}>
            <PavluksLogoIcon
              width={moderateScale(16)}
              height={moderateScale(16)}
            />
            <Text style={styles.providerName}>Pavluks-trans</Text>
          </View>
        </View>
        <View style={styles.seatsInfo}>
          <BusChairIcon width={moderateScale(16)} height={moderateScale(16)} />
          <Text style={styles.seatsText}>{t("seats")}: 10</Text>
        </View>
      </View>
      <View style={styles.ticketDotLineContainer}>
        <GrayCircle style={styles.grayCircleLeft} />
        <TicketDotLineIcon height={moderateScale(2)} />
        <GrayCircle style={styles.grayCircleRight} />
      </View>

      <View style={styles.pricingCard}>
        <View style={styles.cashbackContainer}>
          <CashbackIcon width={moderateScale(19)} height={moderateScale(19)} />
          <View style={styles.cashbackInfo}>
            <Text style={styles.cashbackLabel}>{t("cashback")}</Text>
            <Text style={styles.cashbackAmount}>+40 грн</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>4 500 ₴</Text>
          <Text style={styles.currentPrice}>3 800 ₴</Text>
        </View>

        <TouchableOpacity>
          <ArrowRightButtonIcon
            width={moderateScale(32)}
            height={moderateScale(32)}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.mainBorder,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  routeContainer: {
    marginBottom: moderateScale(16),
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(6),
  },
  duration: {
    ...fontFamilies.interRegular14,
    color: colors.mainBlack,
  },
  transfers: {
    ...fontFamilies.interMedium12,
    color: colors.mainBlack,
  },
  divider: {
    marginBottom: moderateScale(16),
  },
  providerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(16),
  },
  providerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(6),
  },
  providerLabel: {
    ...fontFamilies.interMedium12,
    color: colors.mainBlack,
  },
  providerBrand: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(6),
  },
  providerName: {
    ...fontFamilies.interRegular12,
    color: colors.mainBlack,
  },
  seatsInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(6),
  },
  seatsText: {
    ...fontFamilies.interRegular12,
    color: colors.mainBlack,
  },
  ticketDotLineContainer: {
    position: "relative",
    marginBottom: moderateScale(20),
  },
  pricingCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cashbackContainer: {
    height: moderateScale(42),
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    alignItems: "center",
    gap: moderateScale(10),
    backgroundColor: colors.mainGray,
  },
  cashbackInfo: {
    alignItems: "flex-start",
  },
  cashbackLabel: {
    ...fontFamilies.interRegular11,
    color: colors.mainBlack,
  },
  cashbackAmount: {
    ...fontFamilies.interRegular11,
    color: colors.mainRed,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(4),
  },
  originalPrice: {
    ...fontFamilies.interRegular10,
    textDecorationLine: "line-through",
    color: colors.darkGray,
  },
  currentPrice: {
    ...fontFamilies.interBold18,
    color: colors.mainBlack,
  },
  grayCircleLeft: {
    top: moderateScale(-12),
    left: moderateScale(-30),
    borderWidth: 1,
    borderColor: colors.mainBorder,
  },
  grayCircleRight: {
    top: moderateScale(-12),
    right: moderateScale(-30),
    borderWidth: 1,
    borderColor: colors.mainBorder,
  },
})

export default Ticket
