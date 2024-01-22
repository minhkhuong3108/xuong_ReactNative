import {
    Text, View, Image, ImageBackground,
    TouchableOpacity, TextInput, KeyboardAvoidingView,
    Keyboard, Platform, ScrollView, FlatList, StyleSheet, Pressable
} from 'react-native';
import React, { useState, useEffect, } from 'react';
import { images, icons, } from '../constants';
import { UIButton } from '../components';
import { Alert } from 'react-native';
const ProductFeaturedItem = (props) => {
    const { img, promotion, isSaved, productName, describe, reviews } = props.products
    const { onPress } = props
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}>
            <View style={styles.Class3}>
                <View style={styles.item}>

                    <Image style={styles.imageItem}
                        source={img}
                    />
                    <View style={styles.ClassChild}>
                        <Image
                            source={require('../assets/images/Featured/heart_black.png')}
                            style={[styles.nameItem, {
                                tintColor: isSaved === undefined || isSaved === false ?
                                    '#D24545' : '#E5E1DA'
                            }]} />
                        <Text style={styles.priceItem}>{promotion}</Text>
                    </View>
                    <View style={styles.describe}>
                        <View style={styles.describeChild}>
                            <Text style={styles.nameProduct}>{productName}</Text>
                            <Text style={styles.inforProduct}>{describe}</Text>
                        </View>

                        <Text style={styles.evaluate}>{reviews}</Text>
                    </View>
                </View>
            </View>
        </Pressable>

    )
}
export default ProductFeaturedItem

const styles = StyleSheet.create({
    evaluate: {
        backgroundColor: '#EAEAEA',
        width: 43,
        height: 38,
        textAlign: 'center',
        marginTop: 8,
        borderRadius: 50,
        paddingTop: 8,
        fontWeight: '500',
        fontSize: 15,
        justifyContent: 'center'
    },
    inforProduct: {
        fontWeight: '400',
    },
    nameProduct: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    describeChild: {
        flexDirection: 'column',
        marginTop: 10
    },
    describe: {
        flexDirection: 'row',
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    container: {
        alignItems: 'center',
        flex: 1,
    },
    Class3: {
        flexDirection: 'row',
        marginTop: 10,
    },
    ClassChild: {
        flexDirection: 'column',
        marginTop: 45,


    },
    imageItem: {
        width: 352,
        height: 230,
        resizeMode: 'contain',
        position: 'absolute',

    },
    priceItem: {
        fontWeight: 'bold',
        fontSize: 14,
        position: 'absolute',
        backgroundColor: '#FFDD22',
        padding: 4,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 14
    },
    nameItem: {
        alignSelf: 'flex-end',
        tintColor: 'white',
        marginRight: 5,
        height: 25,
        width: 25
    },
    item: {
        height: 260,
        width: 352,
        marginBottom: 30,
    },



})