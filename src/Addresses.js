import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Addresses = () => {
    const [securePassword, setSecurePassword] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/muiTen.png')}
                />
            </View>
            <View style={styles.addressesContainer}>
                <Text style={styles.addresseLabel}>Addresses</Text>
            </View>
            <View style={styles.addressContainer}>
                <TextInput
                    placeholder='Address'
                    placeholderTextColor='#B4B4B4'
                    style={styles.input}
                />
            </View>
            <View style={styles.addressContainer}>
                <TextInput
                    placeholder='City'
                    placeholderTextColor='#B4B4B4'
                    style={styles.input}
                />
            </View>
            <View style={styles.addressContainer}>
                <TextInput
                    placeholder='Town'
                    placeholderTextColor='#B4B4B4'
                    style={styles.input}
                />
            </View >
            <View style={styles.streetContainer}>
                <TextInput
                    placeholder='Street'
                    placeholderTextColor='#B4B4B4'
                    style={styles.input}
                />
            </View>
            <View style={styles.saveContainer}>
                <TouchableOpacity style={styles.saveInput}>
                    <Text style={styles.saveLabel}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Addresses

const styles = StyleSheet.create({
    saveLabel:{
        color: '#000',
        fontSize: 17,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 25.5,
        letterSpacing: -0.374
    },
    saveInput:{
        width: '100%',
        height: 55,
        backgroundColor: '#FBDE3F',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveContainer:{
        width:'100%'
    },
    streetContainer: {
        width: '100%',
        marginBottom: 235
    },
    input: {
        width: '100%',
        height: 55,
        borderRadius: 100,
        borderWidth: 1,
        color: 'black',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22.5,
        letterSpacing: -0.33,
        paddingVertical: 16,
        paddingHorizontal: 35,
    },
    addressContainer: {
        width: '100%',
        marginBottom: 28,

    },
    addresseLabel: {
        color: '#000',
        fontSize: 26,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 39,
        letterSpacing: -0.572
    },
    addressesContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 63
    },
    image: {
        width: 33,
        height: 33,
        color: '#00000'
    },
    imageContainer: {
        width: '100%'
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 26
    }
})