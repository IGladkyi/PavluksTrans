import React, { useEffect } from "react"
import { View, Image, StyleSheet, Dimensions, StatusBar } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/AppNavigator"
import { ScreensEnum } from "../../constants/ScreensEnum"

const { width, height } = Dimensions.get("window")

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList>

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>()

  useEffect(() => {
    // Hide status bar for splash screen
    StatusBar.setHidden(true)

    // Navigate to main screen after delay
    const timer = setTimeout(() => {
      StatusBar.setHidden(false)
      navigation.navigate(ScreensEnum.MAIN)
    }, 2500)

    return () => {
      clearTimeout(timer)
      StatusBar.setHidden(false)
    }
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

export default SplashScreen
