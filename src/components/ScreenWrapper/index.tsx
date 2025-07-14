import React, { memo } from "react"
import { useTranslation } from "react-i18next"
import {
  ViewStyle,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  StatusBarProps,
  RefreshControl,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface Props {
  childrenStyle?: ViewStyle | ViewStyle[]
  title?: string
  isBackButton?: boolean
  isCenterTitle?: boolean
  children?: React.ReactNode
  onboardingScreen?: boolean
  handleBackButtonPress?: () => void
  statusBarColor?: StatusBarProps["barStyle"]
  isCalendarScreen?: boolean
  keyboardVerticalOffset?: number
  refreshControl?: React.ReactElement // ⬅️ Додаємо проп
}

const ScreenWrapper: React.FC<Props> = memo(
  ({
    children,
    isBackButton = false,
    isCenterTitle = false,
    title = "",
    onboardingScreen = false,
    statusBarColor = "light-content",
    handleBackButtonPress,
    childrenStyle,
    isCalendarScreen,
    keyboardVerticalOffset,
    refreshControl, // ⬅️ Приймаємо проп
  }: Props) => {
    const { t } = useTranslation()

    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <SafeAreaView edges={["top"]} />
        <View>
          <StatusBar barStyle={statusBarColor} />

          {/* {title && (
            <View style={[styles.navigation_container, { backgroundColor }]}>
              {isBackButton ? (
                <BackButton handleBackButtonPress={handleBackButtonPress} />
              ) : (
                <View style={styles.empty_view} />
              )}
              <Text style={styles.title}>{title}</Text>
              {isCenterTitle && <View style={styles.empty_view} />}
            </View>
          )} */}
        </View>
      </KeyboardAvoidingView>
    )
  }
)

export default ScreenWrapper
