import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './MainStackNavigation'
import { AppContext } from '../AppContext'
import AuthNavigation from './AuthNavigation'

const AppNavigation = () => {
  return (
    <NavigationContainer>
       {
          <MainStackNavigation/>
       } 
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})