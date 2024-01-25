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
    {
        tintColor: isSaved === undefined || isSaved === false ?
            '#D24545' : '#E5E1DA'
    }
    const {id, img, promotion, isSaved, productName, describe, reviews } = props.products
    const { onPress } = props
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}>
            <View style={[styles.viewFeature]}>
                <View style={styles.viewSale}>
                    <Text style={styles.txtSale}>{promotion}</Text>
                </View>

                <TouchableOpacity style={styles.btnFavorite} >
                    {/* {
                        id === favorited ? <Image style={styles.imgFavorite} source={require('../assets/images/home/product_feature/favorite.png')} />
                            : <Image style={styles.imgFavorite} source={require('../assets/images/home/product_feature/no_favorite.png')} />

                    } */}
                    <Image style={styles.imgFavorite} source={require('../assets/images/Featured/heart.png')}/>
                </TouchableOpacity>

                <Image source={img} style={styles.imgFeature} />

                <View style={styles.viewDesFeature}>
                    <View style={styles.viewNameFeature}>
                        <Text style={styles.txtNameFeature}>{productName}</Text>
                        <Text style={styles.txtPriceFeature}>{describe}</Text>
                    </View>

                    <View style={styles.viewRate}>
                        <Text style={styles.txtRate}>{reviews}</Text>
                    </View>
                </View>
            </View>
        </Pressable>

    )
}
export default ProductFeaturedItem

const styles = StyleSheet.create({
    imgFavorite: {
        
        zIndex:1
      },
      btnFavorite: {
        position: 'absolute',
        zIndex: 1,
        right: 10,
        top: 12
      },
      txtSale: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
      },
      viewSale: {
        position: 'absolute',
        height: 26,
        backgroundColor: '#FFDD22',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: 1,
        justifyContent:'center',
        alignItems:'center',
        top: 20,
        left: 0,
        paddingHorizontal: 8
      },
      txtRate: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
      },
      viewRate: {
        width: 43,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        borderRadius: 43 / 2
      },
      txtPriceFeature: {
        fontSize: 15
      },
      txtNameFeature: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
      },
      viewNameFeature: {
        flexDirection: 'column'
      },
      viewDesFeature: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 13,
        marginBottom:36
      },
      imgFeature: {
        width: '100%',
        height: 197,
        borderRadius: 10
      },
      viewFeature: {
        flexDirection: 'column',
        marginHorizontal:20
        
      },
    // evaluate: {
    //     backgroundColor: '#EAEAEA',
    //     width: 43,
    //     height: 38,
    //     textAlign: 'center',
    //     marginTop: 8,
    //     borderRadius: 50,
    //     paddingTop: 8,
    //     fontWeight: '500',
    //     fontSize: 15,
    //     justifyContent: 'center'
    // },
    // inforProduct: {
    //     fontWeight: '400',
    // },
    // nameProduct: {
    //     fontSize: 21,
    //     fontWeight: 'bold'
    // },
    // describeChild: {
    //     flexDirection: 'column',
    //     marginTop: 10
    // },
    // describe: {
    //     flexDirection: 'row',
    //     marginTop: 150,
    //     alignItems: 'center',
    //     justifyContent: 'space-between',

    // },
    // container: {
    //     alignItems: 'center',
    //     flex: 1,
    // },
    // Class3: {
    //     flexDirection: 'row',
    //     marginTop: 10,
    // },
    // ClassChild: {
    //     flexDirection: 'column',
    //     marginTop: 45,


    // },
    // imageItem: {
    //     width: 352,
    //     height: 230,
    //     position: 'absolute',
    //     borderRadius: 10

    // },
    // priceItem: {
    //     fontWeight: 'bold',
    //     fontSize: 14,
    //     position: 'absolute',
    //     backgroundColor: '#FFDD22',
    //     padding: 4,
    //     borderTopRightRadius: 15,
    //     borderBottomRightRadius: 14
    // },
    // nameItem: {
    //     alignSelf: 'flex-end',
    //     tintColor: 'white',
    //     marginRight: 5,
    //     height: 25,
    //     width: 25
    // },
    // item: {
    //     height: 260,
    //     width: 352,
    //     marginBottom: 30,
    // },



})