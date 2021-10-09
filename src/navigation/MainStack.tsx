import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from 'expo-constants';

//Screens
import { LandingScreen } from "../screens/LandingScreen";

import MainTab from "./MainTab";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                statusBarStyle: "dark",
            }}
        >
            <Stack.Screen name='LandingScreen' component={LandingScreen} />
            <Stack.Screen name='MainTab' component={MainTab} />
        </Stack.Navigator>
    )
}

export default MainStack