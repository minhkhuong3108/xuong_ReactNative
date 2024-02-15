import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Foodoo from '../Foodoo';
import ProductDetails from '../ProductDetails';
import ProductFavorite from '../ProductFavorite';
import ProductFeatured from '../ProductFeatured';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../Setting';
import Cart from '../Cart';
import Search from '../Serach';
import Orders from '../Orders';
import OrdersDatail from '../OrdersDetail';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnCart}>
    <View style={styles.viewCart}>
      {children}
    </View>
  </TouchableOpacity>
)

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={AppTab} />
      <Stack.Screen name='ProductHot' component={Foodoo} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
      <Stack.Screen name='ProductFeatured' component={ProductFeatured} />
      <Stack.Screen name='Orders' component={Orders} />
      <Stack.Screen name='OrdersDatail' component={OrdersDatail} />
      <Stack.Screen name='Cart' component={Cart} />




    </Stack.Navigator>
  )
}
const AppTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBarStyle }}>
      <Tab.Screen name='TabHome' component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewNavItem}>
              <Image
                source={require('../../assets/images/Navigation/home_no_select.png')}
                resizeMode='contain'
                tintColor={focused ? '#FFD800' : '#000'}
              />
              <View style={[styles.viewTron, { display: focused ? 'flex' : 'none' }]}></View>
            </View>
          )
        }}
      />
      <Tab.Screen name='TabSearch' component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewNavItem}>
              <Image
                source={require('../../assets/images/Navigation/search_no_select.png')}
                resizeMode='contain'
                tintColor={focused ? '#FFD800' : '#000'}
              />
              <View style={[styles.viewTron, { display: focused ? 'flex' : 'none' }]}></View>
            </View>
          )
        }}
      />
      <Tab.Screen name='TabCart' component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/Navigation/cart_no_select.png')}
              resizeMode='contain'
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen name='TabFavorite' component={ProductFavorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewNavItem}>
              <Image
                source={require('../../assets/images/Navigation/heart_no_select.png')}
                resizeMode='contain'
                tintColor={focused ? '#FFD800' : '#000000'}
              />
              <View style={[styles.viewTron, { display: focused ? 'flex' : 'none' }]}></View>
            </View>
          )
        }}
      />
      <Tab.Screen name='TabSetting' component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewNavItem}>
              <Image
                source={require('../../assets/images/Navigation/person_no_select.png')}
                resizeMode='contain'
                tintColor={focused ? '#FFD800' : '#000'}
              />
              <View style={[styles.viewTron, { display: focused ? 'flex' : 'none' }]}></View>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MainStackNavigation

const styles = StyleSheet.create({
  viewCart: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FBDE3F'
  },
  btnCart: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTron: {
    backgroundColor: '#FFD800',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginTop: 7,
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    height: 60,
  }
})