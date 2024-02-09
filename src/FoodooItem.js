import {
    Text, View, Image, ImageBackground,
    TouchableOpacity, TextInput, KeyboardAvoidingView,
    Keyboard, Platform, ScrollView, FlatList, StyleSheet, Pressable
} from 'react-native';
import React, { useState, useEffect, } from 'react';
import { images, icons, } from '../constants';
import { UIButton } from '../components';
import { Alert } from 'react-native';
const FoodooItem = (props,{navigation}) => {
    let { id,name, price, image } = props.foods
    const { onPress } = props
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}>
            <View style={styles.Class3}>
                <View style={styles.item}>
                    <Image source={{uri:image}}
                        style={styles.imageItem} />
                    <View style={styles.ClassChild}>
                        <Text style={styles.nameItem}>{name}</Text>
                        <Text style={styles.priceItem}> <Text style={styles.dollar}>$</Text> {price}</Text>
                    </View>
                </View>
            </View>
        </Pressable>

    )
}
export default FoodooItem
const styles = StyleSheet.create({
    dollar: { color: '#FFC532' },
    ClassChild: {
        alignItems: 'center', marginTop: 70
    },
    imageItem: {
        width: 170,
        height:113,
        position: 'absolute',
        bottom: 70,
        resizeMode: 'contain',

    },
    priceItem: {
        fontWeight: 'bold',
        lineHeight: 35,
        fontSize: 15
    },
    nameItem: {
        fontWeight: 'bold',
        lineHeight: 15,
        fontSize: 15,
    },
    item: {
        height: 133,
        width: 159,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 8,
        marginBottom: 20,
        alignItems:'center'
    },
    Class3: {
        flexDirection: 'row',
        marginTop: 80,
        flex: 1,
        alignItems:'center'
    },
    titleInput: {
        marginLeft: 60
    },
    iconMenu: {
        height: 30,
        width: 30,
        marginLeft: 100,
        marginTop: 12
    },
    iconSearch: {
        position: 'absolute',
        height: 26,
        width: 26,
        marginLeft: 25,
        marginTop: 12
    },
    Class2: {
        backgroundColor: '#E5E5E575',
        flexDirection: 'row',
        marginTop: 25,
        width: 353,
        height: 54,
        borderRadius: 30
    },
    icon: {
        right: 230
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
    },
    container: {
        alignItems: 'center',
        flex: 1,

    },
    Class1: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center'

    }
})