import colors from "@styles/colors"
import { fontFamilies } from "@styles/theme"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Пошук</Text>
      <Text style={styles.subtitle}>Знайдіть потрібні квитки</Text>
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
  },
})

export default SearchScreen
