import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import Welcome from '../Welcome';
import Home from '../Home';
import Foodoo from '../Foodoo';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Sign up' component={SignUp}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ProductHot' component={Foodoo}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

const styles = StyleSheet.create({})