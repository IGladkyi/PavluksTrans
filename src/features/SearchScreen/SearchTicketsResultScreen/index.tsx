import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useTranslation } from "react-i18next"
import { moderateScale } from "react-native-size-matters"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { fontFamilies } from "@/styles/theme"
import colors from "@/styles/colors"
import Ticket from "@/components/Ticket"
import { ArrowLeftIcon, CalendarIcon, FilterIcon } from "@/assets/svg"

const mockData = [
  {
    id: 1,
    date: "2025-02-08",
  },
  {
    id: 2,
    date: "2025-02-08",
  },
]

const SearchTicketsResultScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<NavigationProp<any>>()
  return (
    <SafeAreaView style={styles.container}>
      {/* Filter Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon width={moderateScale(24)} height={moderateScale(24)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterContainer}>
          <FilterIcon width={moderateScale(24)} height={moderateScale(24)} />
          <Text style={styles.filterText}>{t("filters")}</Text>
        </TouchableOpacity>
      </View>
      {/* Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>{t("search tickets")}</Text>
        <Text style={styles.infoText}>
          Київ (метро Академмістечко) - Варшава (Ф. Шопена аеропорт)
        </Text>
      </View>
      {/* Content */}
      <View style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          {/* Date */}
          <TouchableOpacity style={styles.dateContainer}>
            <CalendarIcon
              width={moderateScale(17)}
              height={moderateScale(16)}
            />
            <Text style={styles.dateText}>Четвер, 8 лютого 2025 р.</Text>
          </TouchableOpacity>
          <FlatList
            contentContainerStyle={styles.flatListContent}
            showsVerticalScrollIndicator={false}
            data={mockData}
            renderItem={({ item }) => <Ticket />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchTicketsResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainGray,
  },
  header: {
    paddingTop: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.mainRed,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(8),
  },
  filterText: {
    ...fontFamilies.interMedium12,
    color: colors.white,
  },
  infoContainer: {
    backgroundColor: colors.mainRed,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
    gap: moderateScale(2),
  },
  infoTitle: {
    ...fontFamilies.interBold18,
    color: colors.white,
  },
  infoText: {
    ...fontFamilies.interRegular14,
    color: colors.white,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: colors.mainRed,
  },
  contentContainer: {
    flex: 1,
    height: "100%",
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(16),
    backgroundColor: colors.mainGray,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    gap: moderateScale(10),
  },
  dateContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mainBorder,
    borderRadius: moderateScale(10),
    height: moderateScale(42),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(8),
    paddingHorizontal: moderateScale(20),
  },
  dateText: {
    ...fontFamilies.interBold14,
    color: colors.mainBlack,
  },
  flatListContent: {
    gap: moderateScale(10),
  },
})
