import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import moment from 'moment'

const Payment = ({ navigation }) => {
    const { history, setHistory, cart, setCart } = useContext(AppContext)
    const [checked, setChecked] = useState(false)

    const callAPI = () => {
        // const cartItems = cart.map(product => ({
        //     'id': product.id,
        //     'name': product.name,
        //     'price': product.price,
        //     'image': product.image,
        //     'quantity': 1,
        // }));
        const currentDate = moment();

        // Format ngày theo định dạng bạn muốn
        const formattedDate = currentDate.format('DD/MM/YYYY HH:mm');
        const historyDate = {
            'date':formattedDate,
            'products': cart
        }
        setHistory([...history, historyDate])
        setCart([])
        navigation.navigate('TabHome')
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

            <TouchableOpacity style={styles.btnCheckout} onPress={callAPI}>
                <Text style={styles.txtCheckout}>Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
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