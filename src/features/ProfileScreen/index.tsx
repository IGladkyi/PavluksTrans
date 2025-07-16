import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import colors from "@styles/colors"
import { fontFamilies } from "@styles/theme"
import { useTranslation } from "react-i18next"
import { changeLanguage, getCurrentLanguage } from "../../i18n/languageUtils"

const ProfileScreen = () => {
  const { t } = useTranslation()
  const currentLanguage = getCurrentLanguage()

  const handleLanguageChange = (language: "en" | "ru" | "uk") => {
    changeLanguage(language)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("profile")}</Text>
      <Text style={styles.subtitle}>
        {t("profileLanguage.accountManagement")}
      </Text>

      <View style={styles.languageSection}>
        <Text style={styles.sectionTitle}>
          {t("profileLanguage.languageSection")}
        </Text>
        <View style={styles.languageButtons}>
          <TouchableOpacity
            style={[
              styles.languageButton,
              currentLanguage === "uk" && styles.activeButton,
            ]}
            onPress={() => handleLanguageChange("uk")}
          >
            <Text
              style={[
                styles.languageText,
                currentLanguage === "uk" && styles.activeText,
              ]}
            >
              {t("profileLanguage.ukrainian")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.languageButton,
              currentLanguage === "en" && styles.activeButton,
            ]}
            onPress={() => handleLanguageChange("en")}
          >
            <Text
              style={[
                styles.languageText,
                currentLanguage === "en" && styles.activeText,
              ]}
            >
              {t("profileLanguage.english")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.languageButton,
              currentLanguage === "ru" && styles.activeButton,
            ]}
            onPress={() => handleLanguageChange("ru")}
          >
            <Text
              style={[
                styles.languageText,
                currentLanguage === "ru" && styles.activeText,
              ]}
            >
              {t("profileLanguage.russian")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    ...fontFamilies.interBold20,
    color: colors.main,
    marginBottom: 8,
  },
  subtitle: {
    ...fontFamilies.interRegular14,
    color: colors.darkGray,
    textAlign: "center",
    marginBottom: 40,
  },
  languageSection: {
    width: "100%",
    alignItems: "center",
  },
  sectionTitle: {
    ...fontFamilies.interBold16,
    color: colors.main,
    marginBottom: 16,
  },
  languageButtons: {
    flexDirection: "row",
    gap: 12,
  },
  languageButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.white,
  },
  activeButton: {
    backgroundColor: colors.mainRed,
    borderColor: colors.mainRed,
  },
  languageText: {
    ...fontFamilies.interMedium12,
    color: colors.darkGray,
  },
  activeText: {
    color: colors.white,
  },
})

export default ProfileScreen
