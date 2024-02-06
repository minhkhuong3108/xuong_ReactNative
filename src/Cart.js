import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Cart = () => {
    return (
        <View style={styles.container}>
            <View>
                {/* phần header */}
                <Text style={styles.txtHeader}>Cart</Text>

                {/* Phần body */}
                <View style={styles.viewContainer}>
                    <View style={styles.viewNoMarginRow}>
                        <Text style={styles.txtName}>Mc Double</Text>
                        <Image style={styles.imgProduct} source={require('../assets/images/product/product1.png')} />
                    </View>

                    <View style={styles.viewRow}>
                        <View style={styles.viewQuantity}>
                            <TouchableOpacity>
                                <Image source={require('../assets/images/cart/reduce.png')} />
                            </TouchableOpacity>
                            <View style={styles.viewTxtQuantity}>
                                <Text style={styles.txtQuantity}>1</Text>
                            </View>
                            <TouchableOpacity >
                                <Image source={require('../assets/images/cart/increase.png')} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.txtPriceItem}>$20.99</Text>
                    </View>
                </View>


                <View style={styles.viewTotalPrice}>
                    <Text style={styles.txtTotalPrice}>Subtotal</Text>
                    <Text style={styles.txtTotalPrice}>$20.99</Text>
                </View>
            </View>


            <View>
                <TouchableOpacity style={styles.btnCheckout}>
                    <Text style={styles.txtCheackout}>Go to checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckout}>
                    <Text style={styles.txtCheackout}>Add items</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 20,
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
        marginTop: 40
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
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
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
        justifyContent: 'space-between'
    }
})