

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
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';


function App(): React.JSX.Element {

  return (
    // <Login/>
    // <SignUp/>
    // <Welcome />
    // <Home/>
      <AppStack/>
  );
}


export default App;
