

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
import Setting from './src/Setting';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import AppNavigation from './src/navigation/AppNavigation';
import { AppProvide } from './src/AppContext';
import Orders from './src/Orders';



function App(): React.JSX.Element {

  return (
    <AppProvide>
      <AppNavigation />
    </AppProvide>
    // <Orders/>
  )
}


export default App;
