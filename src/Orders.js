import {
  Text, View, Image, ImageBackground, TouchableOpacity,
  TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import { icons, } from '../constants';
import AxiosInstance from './helpers/AxiosInstance';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';
import { useSelector, useDispatch } from 'react-redux'
import { getCarts } from './API/CartAPI';
import moment from 'moment'
import { format, parseISO } from 'date-fns';



const Orders = ({ navigation }) => {
  const { data } = useSelector(state => state.getCart)
    const { loginData } = useSelector(state => state.login)
    const [history, setHistory] = useState([])
    const dispatch = useDispatch()
    const user = loginData._id

    useEffect(() => {
      const getCart = async () => {
          dispatch(getCarts(user))
      }
      getCart()
  }, [])

  useEffect(() => {
      try {
          if (data.length > 0) {
              setHistory(data)
          }
      } catch (error) {
          console.log(error);
      }
  }, [data])

  const backHome = () => {
    navigation.goBack()
  }
  // const { history, setHistory } = useContext(AppContext)

  // const totalPrice = cart.reduce((total, item) => {
  //   return total + item.price * item.quantity
  // }, 0)

  // const totalQuantity = cart.reduce((totalQuantity, item) => {
  //   return totalQuantity + item.quantity
  // }, 0)

  const renderItem = ({ item }) => {
    // const { id, name, price, image, quantity } = item
    const { _id, date, products, status, user } = item
    const totalPrice = products.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
    const datefns = parseISO(date)
    const formatDate = format(datefns, "dd/MM/yyyy HH:mm" )
    return (
      <View>
        <View style={styles.viewDatePrice}>
          <View>
            <Text style={styles.txtHeadDate}>Order Date:</Text>
            <Text style={styles.txtDate}>{formatDate}</Text>
          </View>

          <View>
            <Text style={styles.txtHeadDate}>Total Price</Text>
            <Text style={styles.txtTotalPrice}>{totalPrice.toFixed(2)}</Text>
          </View>
        </View>
        {
          products.map((product,index) => {
            const { _id, name, images, property, quantity, price } = product
            const totalPriceItem = price * quantity
            return (
              <View style={styles.viewContainer} key={index}>
                <View style={styles.viewNoMarginRow}>
                  <View>
                    <Text style={styles.txtName}>Id Product: {_id}</Text>
                    <Text style={styles.txtName}>Name: {name}</Text>
                    <Text style={styles.txtQuantity}>Quantity: 1</Text>
                    <Text style={styles.txtPriceItem}>
                      {/* ${priceItem.toFixed(2)} */}
                      Price : {price.toFixed(2)}
                    </Text>
                  </View>
                  <View>
                    <Image style={styles.imgProduct} source={{ uri: product.images[0] }} />
                  </View>
                </View>
                <View style={styles.viewRow}>
                  <View style={styles.viewQuantity1}>
                    <Text style={styles.textRow}>Total quantity: {quantity}</Text>
                  </View>
                  <View style={styles.viewQuantity2}>
                    <Text style={styles.textRow}>SubTotal: {totalPriceItem.toFixed(2)} </Text>
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