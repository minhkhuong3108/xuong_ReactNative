

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Login from './src/Login';
import SignUp from './src/SignUp';
import Welcome from './src/Welcome';
import Home from './src/Home';
// import { NavigationContainer } from '@react-navigation/native';
import Foodoo from './src/Foodoo';
import ProductDetails from './src/ProductDetails';
import ProductFavorite from './src/ProductFavorite';
import ProductFeatured from './src/ProductFeatured';
import { NavigationContainer } from '@react-navigation/native';



function App(): React.JSX.Element {

  return (

    <SafeAreaView>
      <StatusBar/>
      <Addresses/>
    </SafeAreaView>

    <AppProvide>
      <AppNavigation/>
    </AppProvide>

  )
}


export default App;
