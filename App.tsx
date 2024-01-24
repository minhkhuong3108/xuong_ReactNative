

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
import AppStack from './src/navigation/AppStack';
import Foodoo from './src/Foodoo';
import ProductDetails from './src/ProductDetails';
import ProductFavorite from './src/ProductFavorite';
import ProductFeatured from './src/ProductFeatured';
import { NavigationContainer } from '@react-navigation/native';
import ResetPassword from './src/ResetPassword';
import UpdatePassword from './src/UpdatePassword';
import Profile from './src/Profile';
import Addresses from './src/Addresses';



function App(): React.JSX.Element {

  return (
    // trong
    // trong2
    // <Login />
    // <SignUp />
    // <Welcome />
    // <Home />
    // <ProductDetails/>
    // <Home />
    // <Foodoo/>
    // <ProductFavorite />
    // <ProductFeatured/>
    // <NavigationContainer>
    //   <AppStack/>
    // </NavigationContainer>
    <SafeAreaView>
      <StatusBar/>
      <Addresses/>
    </SafeAreaView>
  )
}


export default App;
