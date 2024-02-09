import {
    Text, View, Image, ImageBackground, TouchableOpacity,
    TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { images, icons, } from '../constants';
import ProductFeaturedItem from './ProductFeaturedItem';
function ProductFeatured({navigation}) {
    const pressBack=()=>{
        navigation.goBack();
    }
    const [products, setProducts] = useState([
        {
            id: 1,
            img: require('../assets/images/Featured/modal1.png'),
            promotion: 'Free Item(Spend $10)',
            isSaved: true,
            productName: 'McDonald’s(Best Offer)',
            describe: '$4.99 Delivery Fee . 15-30 min',
            reviews: 4.5,
        },
        {
            id: 2,
            img: require('../assets/images/Featured/modal2.png'),
            promotion: 'Buy 1 Get 1 Free',
            isSaved: true,
            productName: 'Supreme Pizza',
            describe: '$2.99 Delivery Fee . 15-30 min',
            reviews: 4.4,
        },
        {
            id: 3,
            img: require('../assets/images/Featured/modal3.png'),
            promotion: '20% off(Spend $10)',
            isSaved: true,
            productName: 'Kebub Bread',
            describe: '$2.99 Delivery Fee . 15-30 min',
            reviews: 4.3,
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

            <TouchableOpacity style={styles.Class1} onPress={pressBack}>
                <Image
                    style={styles.icon}
                    source={icons.muiTen}
                />
            </TouchableOpacity>

            <View style={styles.Class2}>
                <Text style={styles.title}> Featured on Super Foodoo</Text>
            </View>

            <View style={styles.Class3}>
                <FlatList
                    data={products}
                    numColumns={1} //phân thành 2 cột
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <ProductFeaturedItem
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
export default ProductFeatured

const styles = StyleSheet.create({



    Class1: {
        marginTop: 20,
    },
    Class2: {
        marginTop: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    }, icon: {
        marginRight: 320,
    },
    Class3: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1

    },
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor:'#fff'
    },


})