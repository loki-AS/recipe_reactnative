import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react'
import Auth from '../screens/Auth';
import Login from '../screens/Login';
import Recipe from '../screens/Recipe'
import Register from '../screens/Register';
import Tabs from "./Tabs"

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Login"
        component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Recipe"
        component={Recipe}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Register"
        component={Register}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}
