import React, { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MainTabNavigator from "./MainTabNavigator"
import { ScreensEnum } from "../constants/ScreensEnum"
// import SplashScreen from "react-native-splash-screen"

export type RootStackParamList = {
  Main: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  // useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name={ScreensEnum.MAIN} component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
