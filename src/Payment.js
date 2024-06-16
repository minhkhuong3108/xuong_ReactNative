import { Image, Modal, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAllOrder, getOrder } from './API/Order'
import { addToCart } from './API/CartAPI'

const Payment = ({ navigation }) => {
    // const { history, setHistory, cart, setCart } = useContext(AppContext)
    const [checked, setChecked] = useState(false)
    const [visible, setVisible] = useState(false)
    const closeModal = () => {
        setVisible(false)
    }
    // const callAPI = () => {
    //     const currentDate = moment();
    //     // Format ngày theo định dạng
        // const formattedDate = currentDate.format('DD/MM/YYYY HH:mm');
    //     const body = {
    //         'date': formattedDate,
    //         'products': cart
    //     }
    //     setHistory([...history, body])
    //     setCart([])
    //     ToastAndroid.show('Đặt hàng thành công', ToastAndroid.LONG)
    //     navigation.navigate('TabHome')
    // }

    const { getOrderData } = useSelector(state => state.getOrder)
    const { loginData } = useSelector(state => state.login)
    const productOrder = getOrderData.map(item => item.product)
    const dispatch = useDispatch()

    const addCart = () => {
        try {
            const user = loginData._id
            const products = []
            for (let index = 0; index < productOrder.length; index++) {
                const product = productOrder[index];
                const item = { _id: product._id, quantity: product.quantity }
                products.push(item)
            }
            dispatch(addToCart({ user, products }))
            dispatch(deleteAllOrder(user))
            // console.log("products: ",products);
            ToastAndroid.show('Đặt hàng thành công', ToastAndroid.SHORT)
            navigation.navigate('Home')

        } catch (error) {
            console.log(error);
        }
    }

    const showModal = () => {
        setVisible(true)
    }
    return (

        <View style={styles.container}>
            <View >
                <View style={styles.viewRowHead}>
                    <TouchableOpacity style={styles.btnClose} onPress={() => { navigation.goBack() }}>
                        <Image source={require('../assets/images/Payment/close.png')} />
                    </TouchableOpacity>
                    <Text style={styles.txtHeader}>Payment Options</Text>
                </View>
                <Text style={styles.txtSubHead}>Payment Method</Text>

                <TouchableOpacity style={styles.viewRowBody} onPress={() => { setChecked(!checked) }}>
                    <TouchableOpacity>
                        {
                            checked ? <Image source={require('../assets/images/Payment/nochoose.png')} /> : <Image source={require('../assets/images/Payment/choose.png')} />
                        }
                    </TouchableOpacity>
                    <Image source={require('../assets/images/Payment/credit.png')} style={styles.imgcredit} />
                    <Text style={styles.txtCredit}>Credit / Debit card </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewRowBodyNoBorder} onPress={() => { setChecked(!checked) }}>
                    <TouchableOpacity>
                        {
                            checked ? <Image source={require('../assets/images/Payment/choose.png')} /> : <Image source={require('../assets/images/Payment/nochoose.png')} />
                        }
                    </TouchableOpacity>
                    <Image source={require('../assets/images/Payment/cash.png')} style={styles.imgcredit} />
                    <Text style={styles.txtCredit}>Cash on Delivery </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnCheckout} onPress={showModal}>
                <Text style={styles.txtCheckout}>Checkout</Text>
            </TouchableOpacity>

            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                onRequestClose={closeModal}
            >
                <View style={styles.viewModalCotainer}>
                    <View style={styles.viewModal}>
                        <Text style={styles.txtModal}>Are you sure you want to checkout?</Text>

                        <View style={styles.viewBtnModal}>
                            <TouchableOpacity style={styles.btnNoModal} onPress={closeModal}>
                                <Text style={styles.txtModal}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnYesModal} onPress={addCart}>
                                <Text style={styles.txtModal}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    btnYesModal: {
        width: 133,
        height: 47,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBDE3F'
    },
    btnNoModal: {
        width: 133,
        height: 47,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBtnModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtModal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    viewModal: {
        paddingHorizontal: 35,
        paddingVertical: 25,
        width: '100%',
        height: 172,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    viewModalCotainer: {
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D94D'
    },
    txtCheckout: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    btnCheckout: {
        width: '100%',
        height: 55,
        borderRadius: 100,
        backgroundColor: '#FBDE3F',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    txtCredit: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    imgcredit: {
        marginLeft: 25,
        marginRight: 16
    },
    viewRowBody: {
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginBottom: 16
    },
    viewRowBodyNoBorder: {
        flexDirection: 'row',
    },
    txtSubHead: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 37
    },
    txtHeader: {
        fontSize: 26,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 20
    },
    btnClose: {

    },
    viewRowHead: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 40,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginHorizontal: 34,
        justifyContent: 'space-between'
    }
})