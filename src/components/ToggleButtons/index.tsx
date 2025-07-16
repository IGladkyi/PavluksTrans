import colors from "@/styles/colors"
import { fontFamilies } from "@/styles/theme"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"
import { useTranslation } from "react-i18next"

type ToggleButtonsProps = {
  leftButtonText: string
  rightButtonText: string
  selected: string
  setSelected: (text: string) => void
}

const ToggleButtons = ({
  leftButtonText,
  rightButtonText,
  selected,
  setSelected,
}: ToggleButtonsProps) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.leftButton,
          selected === leftButtonText && styles.selectedButton,
        ]}
        onPress={() => setSelected(leftButtonText)}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.buttonText,
            selected === leftButtonText && styles.selectedText,
          ]}
        >
          {t(leftButtonText)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.rightButton,
          selected === rightButtonText && styles.selectedButton,
        ]}
        onPress={() => setSelected(rightButtonText)}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.buttonText,
            selected === rightButtonText && styles.selectedText,
          ]}
        >
          {t(rightButtonText)}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ToggleButtons

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: moderateScale(2),
    borderWidth: 1,
    borderColor: colors.mainBorder,
  },
  button: {
    flex: 1,
    borderRadius: moderateScale(11),
    alignItems: "center",
    justifyContent: "center",
    minHeight: moderateScale(38),
  },
  leftButton: {
    marginRight: moderateScale(2),
  },
  rightButton: {
    marginLeft: moderateScale(2),
  },
  selectedButton: {
    backgroundColor: colors.mainRed,
  },
  buttonText: {
    ...fontFamilies.interMedium14,
    color: colors.mainDark,
  },
  selectedText: {
    ...fontFamilies.interBold14,
    color: colors.white,
  },
})
