import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

import Home from "../../Screens/Home";
import Playlists from "../../Screens/Playlists";
import Profile from "../../Screens/Profile";
import Library from "../../Screens/Library";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let IconComponent = Ionicons;
          let iconName = "home-outline";
          let label = "";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            label = "Home";
          } else if (route.name === "Library") {
            iconName = "folder";
            label = "Library";
            IconComponent = Entypo;
          } else if (route.name === "Playlists") {
            iconName = focused ? "mic" : "mic-outline";
            label = "Playlists";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            label = "Profile";
          }

          const activeColor = "#000000";
          const inactiveColor = "#787a7cff";

          return (
            <View style={styles.tabItem}>
              <IconComponent
                name={iconName}
                size={24}
                color={focused ? activeColor : inactiveColor}
              />
              <Text
                style={[
                  styles.label,
                  { color: focused ? activeColor : inactiveColor },
                ]}
              >
                {label}
              </Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Playlists" component={Playlists} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 20,
    right: 20,
    height: 74,
    // borderRadius: 28,
    borderTopLeftRadius:28,
    borderTopRightRadius:28,
    backgroundColor: "#FFFFFF",
    elevation: 12,
    paddingHorizontal: 18,
    paddingTop: 8,
    alignItems: "center",
    paddingVertical:40
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  label: {
    marginTop: 4,
    fontSize: 11,
    fontWeight:"900",
    lineHeight: 12,
  },
});
