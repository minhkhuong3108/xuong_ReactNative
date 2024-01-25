import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Sign up' component={SignUp}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})