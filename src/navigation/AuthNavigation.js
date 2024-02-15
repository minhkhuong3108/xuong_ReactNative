import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Welcome'
import Login from '../Login'
import SignUp from '../SignUp'
const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Sign up' component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})