import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, StyleSheet } from "react-native"
import { fontFamilies } from "@/styles/theme"
import SearchScreen from "@/screens/SearchScreen"
import ProfileScreen from "@/screens/ProfileScreen"
import TicketsScreen from "@/screens/TicketsScreen"
import colors from "@/styles/colors"
import {
  BusIcon,
  ContactIcon,
  ProfileIcon,
  SearchIcon,
  TicketIcon,
} from "@/assets/svg"
import { ScreensEnum } from "../constants/ScreensEnum"
import { moderateScale } from "react-native-size-matters"
import { isIOS } from "@/utils/platformChecker"
import MyBusScreen from "@/screens/MyBusScreen"
import ContactsScreen from "@/screens/ContactsScreen"

export type MainTabParamList = {
  Search: undefined
  Tickets: undefined
  Bus: undefined
  Contacts: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<MainTabParamList>()

// Custom Tab Icon Component
const TabIcon = ({
  focused,
  color,
  iconName,
}: {
  focused: boolean
  color: string
  iconName: string
}) => {
  const getIcon = () => {
    switch (iconName) {
      case ScreensEnum.SEARCH:
        return <SearchIcon color={color} />
      case ScreensEnum.TICKETS:
        return <TicketIcon color={color} />
      case ScreensEnum.PROFILE:
        return <ProfileIcon color={color} />
      case ScreensEnum.CONTACTS:
        return <ContactIcon color={color} />
      case ScreensEnum.BUS:
        return <BusIcon color={color} />
    }
  }

  return (
    <View
      style={[styles.iconContainer, focused && styles.iconContainerFocused]}
    >
      {getIcon()}
    </View>
  )
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreensEnum.SEARCH}
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              color={focused ? colors.mainRed : colors.darkGray}
              iconName={route.name}
            />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: colors.mainRed,
          tabBarInactiveTintColor: colors.darkGray,
          headerShown: false,
          tabBarVisible: false,
        }
      }}
    >
      <Tab.Screen name={ScreensEnum.SEARCH} component={SearchScreen} />
      <Tab.Screen name={ScreensEnum.TICKETS} component={TicketsScreen} />
      <Tab.Screen name={ScreensEnum.CONTACTS} component={ContactsScreen} />
      <Tab.Screen name={ScreensEnum.BUS} component={MyBusScreen} />
      <Tab.Screen name={ScreensEnum.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: moderateScale(16),
    backgroundColor: colors.white,
    height: isIOS() ? moderateScale(100) : moderateScale(70),
    paddingTop: moderateScale(14),
    borderTopWidth: 0,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8,
  },
  tabBarLabel: {
    ...fontFamilies.interSemiBold11,
    textAlign: "center",
    marginTop: moderateScale(4),
  },
  iconContainer: {
    width: moderateScale(26),
    height: moderateScale(24),
  },
  iconContainerFocused: {
    transform: [{ scale: 1.1 }],
  },
  iconText: {
    textAlign: "center",
  },
})

export default MainTabNavigator
