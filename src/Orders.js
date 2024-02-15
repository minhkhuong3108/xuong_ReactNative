import {
  Text, View, Image, ImageBackground, TouchableOpacity,
  TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import { icons, } from '../constants';
import AxiosInstance from './helpers/AxiosInstance';
import React, { useState, useEffect } from 'react';



const Orders = ({ navigation }) => {
  const backHome = () => {
    navigation.goBack()
  }
  // const totalPrice = cart.reduce((total, item) => {
  //   return total + item.price * item.quantity
  // }, 0)

  // const totalQuantity = cart.reduce((totalQuantity, item) => {
  //   return totalQuantity + item.quantity
  // }, 0)


  // const renderItem = ({ item }) => {
  //   const { id, name, price, image } = item
  //   return (
  //     <TouchableOpacity
  //       onPress={() => { navigation.navigate('ProductDetails', id) }}
  //       style={styles.container}>
  //       <View style={styles.Class3Item}>
  //         <View style={styles.itemItem}>
  //           <Image source={{ uri: image }}
  //             style={styles.imageItem} />
  //           <View style={styles.ClassChild}>
  //             <Text style={styles.nameItem}>{name}</Text>
  //             <Text style={styles.priceItem}> <Text style={styles.dollar}>$</Text> {price}</Text>
  //           </View>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // }

  return (
    <View style={styles.container}>

      <View style={styles.Class1}>
        <Text style={styles.title}>Orders</Text>
        <TouchableOpacity onPress={backHome}
          style={styles.icon}>
          <Image
            source={icons.muiTen}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewContainer}>
        <View style={styles.viewNoMarginRow}>
          <View>
            <Text style={styles.txtName}>Code:01</Text>
            <Text style={styles.txtName}>name: Buger king</Text>
            <Text style={styles.txtQuantity}>quantity: 1</Text>
            <Text style={styles.txtPriceItem}>
              {/* ${priceItem.toFixed(2)} */}
              price : 80$
            </Text>
          </View>
          <View>
            <Image style={styles.imgProduct} source={require('../assets/images/home/product_hot/product1.png')} />
          </View>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewQuantity1}>
            <Text style={styles.textRow}>Total quantity : 3</Text>
          </View>
          <View style={styles.viewQuantity2}>
            <Text style={styles.textRow}>SubTotal: 180$ </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrdersDatail')}
            style={styles.viewQuantity3}>
            <Text style={styles.textRow}>product details</Text>
          </TouchableOpacity>
        </View>
      </View>




    </View>
  )
}

// <View style={styles.Class3}>

//   <FlatList
//     showsVerticalScrollIndicator={false}
//     numColumns={2}
//     data={hot}
//     renderItem={renderItem}
//     keyExtractor={item => item.id} />

// </View>
export default Orders

const styles = StyleSheet.create({
  txtPriceItem: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold'

  },
  txtQuantity: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'

  },
  textRow: {
    color: 'black',
    fontWeight: 'bold'

  },
  viewQuantity3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 38,
    backgroundColor: '#FBDE3F',
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderColor: '#b8b8b8',


  },
  viewQuantity1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 38,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#b8b8b8',
  },
  viewQuantity2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 38,
    borderTopWidth: 1,
    borderColor: '#b8b8b8',



  },
  imgProduct: {
    width: 100,
    height: 80,
    alignItems: 'flex-end'
  },
  txtName: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold'
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15
  },
  viewNoMarginRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    top: 10


  },
  viewContainer: {
    borderColor: '#b8b8b8',
    height: 134,
    width: '95%',
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#FFFEFE'

  },
  container: {
    alignItems: 'center',
    flex: 1,

  },
  Class1: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center'

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    left: 20
  },
  icon: {
    right: 210
  },


})