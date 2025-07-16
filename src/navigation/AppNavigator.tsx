import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MainTabNavigator from "./MainTabNavigator"
import SplashScreen from "../screens/SplashScreen"
import { ScreensEnum } from "../constants/ScreensEnum"

export type RootStackParamList = {
  Splash: undefined
  Main: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreensEnum.SPLASH}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen
          name={ScreensEnum.SPLASH}
          component={SplashScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreensEnum.MAIN}
          component={MainTabNavigator}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
