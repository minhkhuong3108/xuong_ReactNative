import { Image, ImageBackground, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AxiosInstance from './helpers/AxiosInstance'
import { AppContext } from './AppContext'
import { getProductDetail } from './API/ProductAPI'
import { useDispatch, useSelector } from 'react-redux'
import { addToOrder } from './API/Order'


const ProductDetails = ({ navigation, route }) => {
    const id = route.params.id
    const pressBack = () => {
        navigation.goBack()
    }
    // const [product, setProduct] = useState({})
    const [productDetail, setProductDetail] = useState({})
    const { data } = useSelector(state => state.getProductDetail)
    const dispatch = useDispatch()
    const { loginData } = useSelector(state => state.login)

    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const reponse = await AxiosInstance().get(`/hotSpot/${id}`)
    //             setProduct(reponse)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getProduct()
    // }, [id])

    useEffect(() => {
        const getProductDetails = async () => {
          try {
            dispatch(getProductDetail(id))
          } catch (error) {
            console.log(error);
          }
        }
        getProductDetails()
      }, [])
    
      useEffect(() => {
        try {
          setProductDetail(data)
        } catch (error) {
          console.log(error);
        }
      }, [data])
    
      const addToCart = async () => {
        try {
          const user = loginData._id
          const product = productDetail._id
          dispatch(addToOrder({ user, product }))
          ToastAndroid.show('Đã thêm sản phẩm vào giỏ hàng', ToastAndroid.SHORT)
          console.log('user:', user);
          // navigation.navigate('Cart')
        } catch (error) {
    
        }
      }
      const{name,images,price} = productDetail

    // const { cart, setCart, favorited, setFavorited } = useContext(AppContext)

    // const addToCart = () => {
    //     const cartItem = {
    //         'id': product.id,
    //         'name': product.name,
    //         'price': product.price,
    //         'image': product.image,
    //         'quantity': 1,
    //     }
    //     const index = cart.findIndex(item => item.id == product.id)
    //     if (index == -1) {
    //         setCart([...cart, cartItem])
    //     } else {
    //         cart[index].quantity++
    //         setCart([...cart])
    //     }
    //     ToastAndroid.show('Thêm sản phẩm thành công', ToastAndroid.LONG)
    // }
    // const checkFavorited = () => {
    //     const index = favorited.findIndex(item => item.id == product.id)
    //     if (index == -1) {
    //         return false
    //     }
    //     return true
    // }
    // const addToFavorite = () => {
    //     const index = favorited.findIndex(item => item.id == product._id)
    //     if (index == -1) {
    //         setFavorited([...favorited, product])
    //     } else {
    //         const newFavorite = [...favorited]
    //         newFavorite.splice(index, 1)
    //         setFavorited(newFavorite)
    //     }
    // }
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.viewBackground}>
                <TouchableOpacity style={styles.btnBack} onPress={pressBack}>
                    <Image style={styles.imgBack} source={require('../assets/images/back.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnFavorite}>
                    {
                        <Image source={require('../assets/images/product_details/favorite.png')} /> 
                            // <Image source={require('../assets/images/product_details/heart_black.png')} />
                    }
                </TouchableOpacity>
                <Image style={styles.imgBackground} source={require('../assets/images/product_details/background.png')} />
            </View>

            <View style={styles.viewProduct}>
                <View style={styles.viewInfor}>
                    {
                        images && <Image style={styles.imgProduct} source={{ uri: images[0] }} />
                    }

                    <Text style={styles.txtName}>{name}</Text>

                    <View style={styles.viewSubInfo}>
                        <View style={styles.viewSubInforItem}>
                            <Image source={require('../assets/images/product_details/i_time.png')} />
                            <Text style={styles.txtSubInfor}>50 min</Text>
                        </View>

                        <View style={[styles.viewSubInforItem, { marginHorizontal: 25 }]}>
                            <Image source={require('../assets/images/product_details/i_star.png')} />
                            <Text style={styles.txtSubInfor}>4.8</Text>
                        </View>

                        <View style={styles.viewSubInforItem}>
                            <Image source={require('../assets/images/product_details/i_fire.png')} />
                            <Text style={styles.txtSubInfor}>420 cal</Text>
                        </View>
                    </View>

                    <Text style={styles.txtPrice}>${price}.00</Text>
                </View>

                <View style={styles.viewOther}>
                    <Text style={styles.txtOther}>Mc Double Comes With</Text>

                    <View style={styles.viewOtherItem}>
                        <Text style={styles.txtNameOther}>Ketchup</Text>

                        <View style={styles.viewQuantity}>
                            <TouchableOpacity>
                                <Image source={require('../assets/images/product_details/reduce.png')} />
                            </TouchableOpacity>

                            <View style={styles.viewTxtQuantity}>
                                <Text style={styles.txtQuantity}>1</Text>
                            </View>

                            <TouchableOpacity>
                                <Image source={require('../assets/images/product_details/increase.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.viewOtherItem}>
                        <Text style={styles.txtNameOther}>Cheese</Text>

                        <View style={styles.viewQuantity}>
                            <TouchableOpacity>
                                <Image source={require('../assets/images/product_details/reduce.png')} />
                            </TouchableOpacity>

                            <View style={styles.viewTxtQuantity}>
                                <Text style={styles.txtQuantity}>1</Text>
                            </View>

                            <TouchableOpacity>
                                <Image source={require('../assets/images/product_details/increase.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.txtTogetther}>Frequently bought together</Text>
                    <View style={styles.viewTogether}>
                        <View style={styles.viewInforTogether}>
                            <Text style={styles.txtNameTogether}>French Fries</Text>
                            <Text style={styles.txtPriceTogether}>$5.67</Text>
                        </View>

                        <View style={styles.viewImgTogether}>
                            <Image source={require('../assets/images/product_details/product_bonus.png')} />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.btnAdd} onPress={addToCart} >
                        <Text style={styles.txtAdd}>Add 1 to cart </Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    txtAdd: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
    },
    btnAdd: {
        backgroundColor: '#FBDE3F',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 100,
        marginTop: 10
    },
    viewImgTogether: {
        width: 103,
        height: 90,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtPriceTogether: {
        fontSize: 18,
        color: '#000'
    },
    txtNameTogether: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    viewInforTogether: {
        flexDirection: 'column',
    },
    viewTogether: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtTogetther: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginBottom: 13
    },
    txtQuantity: {
        fontSize: 13,
        color: '#000'
    },
    viewTxtQuantity: {
        width: 19,
        height: 19,
        borderRadius: 9.5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 9
    },
    btnReduce: {

    },
    viewQuantity: {
        width: 88,
        height: 32,
        backgroundColor: '#FBDE3F',
        borderRadius: 42,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtNameOther: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
    viewOtherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#b8b8b8',
        paddingBottom: 18,
        marginTop: 20
    },
    txtOther: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    viewOther: {
        paddingHorizontal: 20,
        marginTop: 32
    },
    txtPrice: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 18
    },
    txtSubInfor: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 6
    },
    viewSubInforItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewSubInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17
    },
    txtName: {
        marginTop: 70,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000'
    },
    imgProduct: {
        zIndex: 1,
        position: 'absolute',
        top: -138,
        width: 273,
        height: 207
    },
    viewInfor: {
        alignItems: 'center'
    },
    viewProduct: {
        backgroundColor: '#fff',
        width: '100%',
        height: 632,
        marginTop: 200,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    btnFavorite: {
        position: 'absolute',
        right: 24,
        top: 20,
        backgroundColor: '#fff',
        width: 38,
        height: 34,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    btnBack: {
        position: 'absolute',
        left: 24,
        top: 20,
        backgroundColor: '#fff',
        width: 38,
        height: 35,
        borderRadius: 19,
        alignItems: 'center',
        zIndex: 1
    },
    imgBack: {
        marginTop: 3
    },
    imgBackground: {
        width: '100%'
    },
    viewBackground: {
        backgroundColor: '#FBDE3F',
        width: '100%',
        position: 'absolute'
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})