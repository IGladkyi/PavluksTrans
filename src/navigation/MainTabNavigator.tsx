import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, StyleSheet, Text } from "react-native"
import { fontFamilies } from "@styles/theme"
import SearchScreen from "@/features/SearchScreen"
import ProfileScreen from "@/features/ProfileScreen"
import TicketsScreen from "@/features/TicketsScreen"
import colors from "@styles/colors"
import {
  BusIcon,
  ContactIcon,
  ProfileIcon,
  SearchIcon,
  TicketIcon,
} from "@assets/svg"
import { ScreensEnum } from "../constants/ScreensEnum"
import { moderateScale } from "react-native-size-matters"
import { isIOS } from "@utils/platformChecker"
import MyBusScreen from "@/features/MyBusScreen"
import ContactsScreen from "@/features/ContactsScreen"
import { useTranslation } from "react-i18next"

export type MainTabParamList = {
  Search: undefined
  Tickets: undefined
  Bus: undefined
  Contacts: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<MainTabParamList>()

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
        return (
          <SearchIcon
            color={color}
            width={moderateScale(21)}
            height={moderateScale(21)}
          />
        )
      case ScreensEnum.TICKETS:
        return (
          <TicketIcon
            color={color}
            width={moderateScale(24)}
            height={moderateScale(24)}
          />
        )
      case ScreensEnum.PROFILE:
        return (
          <ProfileIcon
            color={color}
            width={moderateScale(20)}
            height={moderateScale(20)}
          />
        )
      case ScreensEnum.CONTACTS:
        return (
          <ContactIcon
            color={color}
            width={moderateScale(20)}
            height={moderateScale(20)}
          />
        )
      case ScreensEnum.BUS:
        return (
          <BusIcon
            color={color}
            width={moderateScale(17)}
            height={moderateScale(20)}
          />
        )
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
  const { t } = useTranslation()
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
          tabBarLabel: ({ focused }) => (
            <Text
              style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}
            >
              {t(route.name)}
            </Text>
          ),
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
    shadowColor: colors.black,
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
    color: colors.darkGray,

    width: moderateScale(70),
  },
  iconContainer: {
    width: moderateScale(24),
    height: moderateScale(24),
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainerFocused: {
    transform: [{ scale: 1.1 }],
  },
  iconText: {
    textAlign: "center",
  },
  tabBarLabelFocused: {
    color: colors.mainRed,
  },
})

export default MainTabNavigator
