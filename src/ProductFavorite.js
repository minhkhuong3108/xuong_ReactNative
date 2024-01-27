import {
    Text, View, Image, ImageBackground, TouchableOpacity,
    TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { images, icons, } from '../constants';
import { UIButton } from '../components';
import { Alert } from 'react-native';
import FavoriteItem from './FavoriteItem';
function ProductFavorite(props) {

    const [products, setProducts] = useState([
        {
            id: 1,
            img: require('../assets/images/Favorite/modal4.png'),
            isSaved: true,
            productName: 'Delicious Pasta',
            describe: '$8.99 Delivery Fee . 15-30 min',
            reviews: 4.6,
        },
        {
            id: 2,
            img: require('../assets/images/Favorite/modal5.png'),
            isSaved: true,
            productName: 'Delicious Cupcakes',
            describe: '$5.99 Delivery Fee . 15-30 min',
            reviews: 4.2,
        },
        {
            id: 3,
            img: require('../assets/images/Favorite/modal6.png'),
            isSaved: true,
            productName: 'Burger King',
            describe: '$10.99 Delivery Fee . 15-30 min',
            reviews: 4.8,
        },
        // {
        //     id: 4,
        //     img: require('../assets/modal1.png'),
        //     promotion: '20% off(Spend $10)',
        //     isSaved: true,
        //     productName: 'McDonald’s(Best Offer)',
        //     describe: '$3.99 Delivery Fee . 15-30 min',
        //     reviews: 4.2,
        // },
        // {
        //     id: 5,
        //     img: require('../assets/modal2.png'),
        //     promotion: '25% off(Spend $10)',
        //     isSaved: true,
        //     productName: 'McDonald’s(Best Offer)',
        //     describe: '$1.99 Delivery Fee . 15-30 min',
        //     reviews: 4.1,
        // },


    ])
    return (
        <View style={styles.container}>

            <View style={styles.Class1}>
                <Text style={styles.title}> Favorites</Text>
            </View>


            <View style={styles.Class3}>
                <FlatList
                    data={products}
                    numColumns={1} //phân thành 2 cột
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <FavoriteItem
                            products={item}
                            onPress={() => {
                                let clonedProducts = products.map(eachProduct => {
                                    if (item.productName === eachProduct.productName) {
                                        return {
                                            ...eachProduct,
                                            isSaved: eachProduct.isSaved === false
                                                || eachProduct.isSaved === undefined
                                                ? true : false
                                        }
                                    }
                                    return eachProduct
                                })
                                setProducts(clonedProducts)
                            }}
                        />}
                    keyExtractor={eachProduct => eachProduct.productName}
                />

            </View>
        </View>

    );
}
export default ProductFavorite

const styles = StyleSheet.create({



    Class1: {
        paddingVertical: 20,

        height: 'auto',
        width: '100%'

    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        justifyContent: 'center',
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        marginLeft: 25


    },
    Class3: {
        flexDirection: 'row',

        flex: 1

    },
    container: {
        alignItems: 'center',
        flex: 1,

    },


})