import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const OrdersDatail = ({ navigation }) => {

    const { cart, setCart } = useContext(AppContext)
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)
    const renderItem = ({ item }) => {
        const { id, name, price, image, quantity } = item
        const priceItem = price * quantity
        const onChangeQuantity = (type) => {
            const quantity = item.quantity + type
            const index = cart.findIndex(cartItem => cartItem.id == id)
            if (quantity <= 0) {
                Alert.alert(
                    'Thông báo',
                    'Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?',
                    [
                        {
                            text: 'Cancel',
                        },
                        {
                            text: 'OK',
                            onPress: () => {
                                cart.splice(index, 1)
                                setCart([...cart])
                            }
                        }
                    ],
                    { cancelable: false }
                )
            } else {
                cart[index].quantity = quantity
                setCart([...cart])
            }
        }
        return (
            <View style={styles.viewContainer}>
                <View style={styles.viewNoMarginRow}>
                    <View>
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

            </View>





            // <View style={styles.viewContainer}>
            //     <View style={styles.viewNoMarginRow}>
            //         <Text style={styles.txtName}>{name}</Text>
            //         <Image style={styles.imgProduct} source={{ uri: image }} />
            //     </View>

            //     <View style={styles.viewRow}>
            //         <View style={styles.viewQuantity}>
            //             <TouchableOpacity onPress={() => onChangeQuantity(-1)}>
            //                 <Image source={require('../assets/images/cart/reduce.png')} />
            //             </TouchableOpacity>
            //             <View style={styles.viewTxtQuantity}>
            //                 <Text style={styles.txtQuantity}>{quantity}</Text>
            //             </View>
            //             <TouchableOpacity onPress={() => onChangeQuantity(1)}>
            //                 <Image source={require('../assets/images/cart/increase.png')} />
            //             </TouchableOpacity>
            //         </View>

            //         <Text style={styles.txtPriceItem}>${priceItem.toFixed(2)}</Text>
            //     </View>
            // </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* phần header */}
            <Text style={styles.txtHeader}>Orders Detail</Text>

            {/* Phần body */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cart}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <ScrollView>
                    <View style={styles.viewContainer}>
                        <View style={styles.viewNoMarginRow}>
                            <View>
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
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={styles.viewNoMarginRow}>
                            <View>
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
                    </View><View style={styles.viewContainer}>
                    <View style={styles.viewNoMarginRow}>
                        <View>
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
                </View>
                


                
            </ScrollView>


            <View style={styles.viewTotalPrice}>
                <Text style={styles.txtTotalPrice}>Subtotal</Text>
                <Text style={styles.txtTotalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={styles.btnCheckout}>
                <Text style={styles.txtCheackout}>Edit Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCheckout}>
                <Text style={styles.txtCheackout}>Delete Orders</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrdersDatail

const styles = StyleSheet.create({
    textRow: {
        color: 'black',
        fontWeight: 'bold'

    },
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
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    txtQuantity: {
        color: '#000',
        fontSize: 15,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    viewNoMarginRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10


    },
    viewContainer: {
        borderColor: '#b8b8b8',
        height: 95,
        width: '95%',
        borderRadius: 10,
        margin: 10,
      backgroundColor:'#F3EEEE'

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