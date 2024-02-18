import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Payment = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
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

                <View style={styles.viewRowBody}>
                    <TouchableOpacity onPress={() => { setChecked(!checked) }}>
                        {
                            checked ? <Image source={require('../assets/images/Payment/nochoose.png')} /> : <Image source={require('../assets/images/Payment/choose.png')} />
                        }
                    </TouchableOpacity>
                    <Image source={require('../assets/images/Payment/credit.png')} style={styles.imgcredit} />
                    <Text style={styles.txtCredit}>Credit / Debit card </Text>
                </View>

                <View style={styles.viewRowBodyNoBorder}>
                    <TouchableOpacity onPress={() => { setChecked(!checked) }}>
                        {
                            checked ? <Image source={require('../assets/images/Payment/choose.png')} /> : <Image source={require('../assets/images/Payment/nochoose.png')} />
                        }
                    </TouchableOpacity>
                    <Image source={require('../assets/images/Payment/cash.png')} style={styles.imgcredit} />
                    <Text style={styles.txtCredit}>Cash on Delivery </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btnCheckout}>
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