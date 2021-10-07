import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import LandingScreen from "../screens/LandingScreen";
import HomeScreen from "../screens/HomeScreen";
import Offer from "../screens/Offer";
import Cart from "../screens/Cart";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator()

const MainTab = () => {

    return (
        <Tab.Navigator
            initialRouteName='LandingScreen'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#ff7900',
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name='Offer'
                component={Offer}
                options={{
                    tabBarLabel: 'Ofertas',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="offer" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Cart'
                component={Cart}
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarLabel: 'Conta',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab