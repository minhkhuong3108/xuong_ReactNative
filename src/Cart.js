import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAllOrder, getOrder } from './API/Order'
import { addToCart } from './API/CartAPI'

const Cart = ({ navigation }) => {

    const { loginData } = useSelector(state => state.login)
    const { getOrderData, getOrderStatus } = useSelector(state => state.getOrder)
    const dispatch = useDispatch()
    const [cart, setCart] = useState([])
    const user = loginData._id
    const products = getOrderData.map(item => item.product)
    const totalPrice = products.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    // const { cart, setCart } = useContext(AppContext)
    // const totalPrice = cart.reduce((total, item) => {
    //     return total + item.price * item.quantity
    // }, 0)

    useEffect(() => {
        const getCart = async () => {
            try {
                dispatch(getOrder(user))
            } catch (error) {
                console.log(error);
            }
        }
        getCart()
    }, [])

    useEffect(() => {
        if (getOrderData.length > 0) {
            setCart(getOrderData);
        }
        if (getOrderData.length === 0) {
            setCart([]);
        }
    }, [getOrderData]);


    const renderItem = ({ item }) => {
        const{_id,user,product} = item
        const {  name, price, images, quantity } = product
        const priceItem = price * quantity
        const onChangeQuantity = (type) => {
            const quantity = item.quantity + type
            // const index = cart.findIndex(cartItem => cartItem._id == _id)
            // if (quantity <= 0) {
            //     Alert.alert(
            //         'Thông báo',
            //         'Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?',
            //         [
            //             {
            //                 text: 'Cancel',
            //             },
            //             {
            //                 text: 'OK',
            //                 onPress: () => {
            //                     cart.splice(index, 1)
            //                     setCart([...cart])
            //                 }
            //             }
            //         ],
            //         { cancelable: false }
            //     )
            // } else {
            //     cart[index].quantity = quantity
            //     setCart([...cart])
            // }
        }
        return (
            <View style={styles.viewContainer}>
                <View style={styles.viewNoMarginRow}>
                    <Text style={styles.txtName}>{name}</Text>
                    {images&&<Image style={styles.imgProduct} source={{ uri: images[0] }} />}
                </View>

                <View style={styles.viewRow}>
                    <View style={styles.viewQuantity}>
                        <TouchableOpacity onPress={() => onChangeQuantity(-1)}>
                            <Image source={require('../assets/images/cart/reduce.png')} />
                        </TouchableOpacity>
                        <View style={styles.viewTxtQuantity}>
                            <Text style={styles.txtQuantity}>{quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => onChangeQuantity(1)}>
                            <Image source={require('../assets/images/cart/increase.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.txtPriceItem}>${priceItem.toFixed(2)}</Text>
                </View>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            {/* phần header */}
            <Text style={styles.txtHeader}>Cart</Text>

            {/* Phần body */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cart}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />


            <View style={styles.viewTotalPrice}>
                <Text style={styles.txtTotalPrice}>Subtotal</Text>
                <Text style={styles.txtTotalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate('Payment')}
                style={styles.btnCheckout}>
                <Text style={styles.txtCheackout}>Go to checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCheckout} onPress={()=>{navigation.navigate('ProductHot')}}>
                <Text style={styles.txtCheackout}>Add items</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    txtCheackout: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold'
    },
    btnCheckout: {
        backgroundColor: '#FBDE3F',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        marginTop: 20,
        borderRadius: 100
    },
    txtTotalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    viewTotalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 20
    },
    txtPriceItem: {
        fontSize: 18,
        color: '#000'
    },
    txtQuantity: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewTxtQuantity: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginHorizontal: 16,
        backgroundColor: '#fff'
    },
    imgQuantity: {
        width: 21,
        height: 21
    },
    viewQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 119,
        height: 38,
        backgroundColor: '#FBDE3F',
        borderRadius: 50
    },
    viewImgProduct: {
        justifyContent: 'flex-end'
    },
    imgProduct: {
        width: 70,
        height: 57,
        alignItems: 'flex-end'
    },
    txtName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    viewNoMarginRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewContainer: {
        paddingVertical: 30,
        borderBottomColor: '#b8b8b8',
        borderBottomWidth: 1
    },
    txtHeader: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 30,
        backgroundColor: '#fff',
    }
})