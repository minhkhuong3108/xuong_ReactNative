import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './MainStackNavigation'
import { AppContext } from '../AppContext'
import AuthNavigation from './AuthNavigation'

const AppNavigation = () => {
    const {isLogin}= useContext(AppContext)
  return (
    <NavigationContainer>
       {
        isLogin ? <MainStackNavigation/> : <AuthNavigation/>
       } 
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})