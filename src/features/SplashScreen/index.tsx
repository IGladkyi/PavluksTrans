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
    let timer: NodeJS.Timeout | null = null

    try {
      // Hide status bar for splash screen
      StatusBar.setHidden(true)

      // Navigate to main screen after delay
      timer = setTimeout(() => {
        try {
          StatusBar.setHidden(false)
          navigation.replace(ScreensEnum.MAIN)
        } catch (error) {
          console.error("Navigation error:", error)
          // Fallback navigation
          navigation.reset({
            index: 0,
            routes: [{ name: ScreensEnum.MAIN }],
          })
        }
      }, 1000)
    } catch (error) {
      console.error("SplashScreen setup error:", error)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
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
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

export default SplashScreen
