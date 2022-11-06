import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Search from "../screens/Search"
import BookMark from "../screens/BookMark"
import Settings from "../screens/Settings";
import { COLORS, icons } from "../constants";
import { TabIcon } from "../components"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style: {
                position: "absolute",
                bottom: 0,
                left:0,
                right:0,
                elevation:0,
                backgroundColor:COLORS.white,
                borderTopColor: "transparent",
                height: 100
            }
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                headerShown: false,
                tabBarIcon:({focused}) => <TabIcon 
                focused={focused}
                icon={icons.home}
                />
            }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => <TabIcon 
                    focused={focused}
                    icon={icons.search}
                    />
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={BookMark}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => <TabIcon 
                    focused={focused}
                    icon={icons.bookmark}
                    />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => <TabIcon 
                    focused={focused}
                    icon={icons.settings}
                    />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;