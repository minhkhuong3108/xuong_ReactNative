

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



function App(): React.JSX.Element {

  return (
    // trong
    // trong2
    // <Login />
    // <SignUp />
    // <Welcome />
    // <Home />
    // <AppStack/>
    // <ProductDetails/>
    // <Home />
    // <Foodoo/>
    // <ProductFavorite />
    <ProductFeatured/>
  )
}


export default App;
