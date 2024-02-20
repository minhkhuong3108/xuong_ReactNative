import {
  Text, View, Image, ImageBackground, TouchableOpacity,
  TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import { icons, } from '../constants';
import AxiosInstance from './helpers/AxiosInstance';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';



const Orders = ({ navigation }) => {
  const backHome = () => {
    navigation.goBack()
  }
  const { history, setHistory } = useContext(AppContext)

  // const totalPrice = cart.reduce((total, item) => {
  //   return total + item.price * item.quantity
  // }, 0)

  // const totalQuantity = cart.reduce((totalQuantity, item) => {
  //   return totalQuantity + item.quantity
  // }, 0)

  const renderItem = ({ item }) => {
    // const { id, name, price, image, quantity } = item
    const totalPrice = item.products.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
    return (
      <View>
        <View style={styles.viewDatePrice}>
          <View>
            <Text style={styles.txtHeadDate}>Order Date:</Text>
            <Text style={styles.txtDate}>{item.date}</Text>
          </View>

          <View>
            <Text style={styles.txtHeadDate}>Total Price</Text>
            <Text style={styles.txtTotalPrice}>{totalPrice.toFixed(2)}</Text>
          </View>
        </View>
        {
          item.products.map(product => {
            const totalPriceItem = product.price * product.quantity

            return (
              <View style={styles.viewContainer}>
                <View style={styles.viewNoMarginRow}>
                  <View>
                    <Text style={styles.txtName}>Id Product: {product.id}</Text>
                    <Text style={styles.txtName}>Name: {product.name}</Text>
                    <Text style={styles.txtQuantity}>Quantity: 1</Text>
                    <Text style={styles.txtPriceItem}>
                      {/* ${priceItem.toFixed(2)} */}
                      Price : {product.price}
                    </Text>
                  </View>
                  <View>
                    <Image style={styles.imgProduct} source={{ uri: product.image }} />
                  </View>
                </View>
                <View style={styles.viewRow}>
                  <View style={styles.viewQuantity1}>
                    <Text style={styles.textRow}>Total quantity: {product.quantity}</Text>
                  </View>
                  <View style={styles.viewQuantity2}>
                    <Text style={styles.textRow}>SubTotal: {totalPriceItem} </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProductHot')}
                    style={styles.viewQuantity3}>
                    <Text style={styles.textRow}>Continue Buy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </View>
    )

  }

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

      <FlatList
        showsVerticalScrollIndicator={false}
        data={history}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

// <View style={styles.Class3}>

// <FlatList
//   showsVerticalScrollIndicator={false}
//   numColumns={2}
//   data={hot}
//   renderItem={renderItem}
//   keyExtractor={item => item.id} />

// </View>
export default Orders

const styles = StyleSheet.create({
  viewDatePrice: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txtTotalPrice: {
    color: '#000',
    fontSize: 16,
    textAlign: 'right',
  },
  txtDate: {
    color: '#000',
    fontSize: 14,
    // fontWeight: 'bold'
  },
  txtHeadDate: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
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