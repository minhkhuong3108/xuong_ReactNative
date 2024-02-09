import {
    Text, View, Image, ImageBackground, TouchableOpacity,
    TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { icons, } from '../constants';
import { Alert } from 'react-native';
import FoodooItem from './FoodooItem';
import AxiosInstance from './helpers/AxiosInstance';


function Search({ navigation }) {
    const [hot, setHot] = useState([])
    useEffect(() => {
      const getProduct = async () => {
        try {
          const response = await AxiosInstance().get('/hotSpot')
          setHot(response)
        } catch (error) {
          console.log(error);
        }
      }
      getProduct()
    },[])
    const backHome = () => {
        navigation.goBack()
    }
    const renderItem= ({item})=>{
        const {id,name,price, image} = item
        return(
            <TouchableOpacity
            onPress={()=>{navigation.navigate('ProductDetails',id)}}
            style={styles.container}>
            <View style={styles.Class3Item}>
                <View style={styles.itemItem}>
                    <Image source={{uri:image}}
                        style={styles.imageItem} />
                    <View style={styles.ClassChild}>
                        <Text style={styles.nameItem}>{name}</Text>
                        <Text style={styles.priceItem}> <Text style={styles.dollar}>$</Text> {price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        )
    }
    const [foods, setFoods] = useState([
        { id: 1, img: require('../assets/images/product/product1.png'), name: "Extra Meat Burger", price: 9.99 },
        { id: 2, img: require('../assets/images/product/product2.png'), name: "Supreme Pizza", price: 4.45 },
        { id: 3, img: require('../assets/images/product/product3.png'), name: "Chicken Wings", price: 3.25 },
        { id: 4, img: require('../assets/images/product/product4.png'), name: "Berry cake", price: 5.29 },
        { id: 5, img: require('../assets/images/product/product5.png'), name: "Ramen", price: 10.59 },
        { id: 6, img: require('../assets/images/product/product6.png'), name: "Ice-cream", price: 3.99 },
        { id: 7, img: require('../assets/images/product/product7.png'), name: "Straw Berry cake", price: 4.99 },
        { id: 8, img: require('../assets/images/product/product8.png'), name: "Sausage Scotland", price: 3.99 },
        // { id: 9, img: require('../assets/images/product/product2'), name: "Water", price: 2.99 },
        // { id: 10, img: require('../assets/images/product/product2'), name: "Yogimg require('../assets/images/product/product2')", price: 10.99 },
        // { id: 11, img: require('../assets/images/product/product2'), name: "Matcha-latte Hot", price: 5.99 },
        // { id: 12, img: require('../assets/images/product/product2'), name: "Capuchino Hot", price: 5.99 },
        // { id: 13, img: require('../assets/images/product/product2'), name: "Americano Hot", price: 5.99 },
        // { id: 14, img: require('../assets/images/product/product2'), name: "Chocolate Hot ", price: 5.99 },
        // { id: 15, img: require('../assets/images/product/product2'), name: "Latte Hot", price: 5.99 },
        // { id: 16, img: require('../assets/images/product/product2'), name: "Mocha Hot", price: 5.99 },
        // { id: 17, img: require('../assets/images/product/product2'), name: " Milk Cream Tea", price: 4.99 },
        // { id: 18, img: require('../assets/images/product/product2'), name: "Soot clogging", price: 8.99 },
        // { id: 19, img: require('../assets/images/product/product2'), name: "Burger Sausage", price: 2.99 },

    ])
    // Khởi tạo state cho giá trị đang nhập (searchText) và trạng thái người dùng đã bắt đầu nhập hay chưa (userStartedTyping)
    const [userStartedTyping, setUserStartedTyping] = useState(false);
    const [searchText, setSearchText] = useState('')

    // Hàm lọc dựa vào tên nhập vào TextInput để tìm sản phẩm , không phân biệt hoa thường
    const filteredFoods = () =>
        hot.filter(eachFood => eachFood.name.toLowerCase().
            includes(searchText.toLowerCase()))

    return (
        <View style={styles.container}>
            <View style={styles.Class1}>
                <Text style={styles.title}>Search</Text>
            </View>

            <View style={styles.Class2}
            >
                <Image
                    style={styles.iconSearch}
                    source={require('../assets/images/home/search.png')} />
                <TextInput
                    autoCorrect={false}
                    onChangeText={(item) => {
                        setSearchText(item);
                        setUserStartedTyping(true); // Người dùng bắt đầu nhập liệu
                    }}
                    onFocus={() => {
                        if (!userStartedTyping) {
                            setSearchText(''); // Chỉ xóa nếu chưa có nhập liệu
                            setUserStartedTyping(true); // Người dùng bắt đầu nhập liệu
                        }
                    }}
                    onBlur={() => {
                        if (searchText === '') {
                            setUserStartedTyping(false);// nếu blur rồi không nhập gì thì set =>> false
                        }
                    }}

                    style={styles.titleInput}>
                    {userStartedTyping ? searchText : "Search Super Foodoo"}
                </TextInput>
                <Image
                    style={styles.iconMenu}
                    source={icons.menu} />
            </View>

            <View style={styles.Class3}>
                
                {filteredFoods().length > 0 ?
                    <FlatList
                        data={filteredFoods()}
                        numColumns={2} //phân thành 2 cột
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                    keyExtractor={eachFood => eachFood.name}
                    columnWrapperStyle={{ justifyContent: 'flex-end' }}
                    /> : <View style={styles.Alerts}>
                        <Text style={styles.AleartsDoc}>No food found</Text>
                    </View>
                }

            </View>

        </View>
    );
}
export default Search

const styles = StyleSheet.create({
    dollar: { color: '#FFC532' },
    ClassChild: {
        alignItems: 'center', 
        marginTop: 70
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
        fontSize: 15,
    },
    nameItem: {
        fontWeight: 'bold',
        lineHeight: 15,
        fontSize: 15,
    },
    itemItem: {
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
    Class3Item: {
        flexDirection: 'row',
        marginTop: 80,
        flex: 1,
        alignItems:'center'
    },
    AleartsDoc: {
        color: 'black',
        fontSize: 15
    },
    Alerts: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    Class3: {
        flexDirection: 'row',
        flex: 1
    },
    titleInput: {
        marginLeft: 60,

        flex: 1
    },
    iconMenu: {
        height: 30,
        width: 30,
        marginRight: 15,
        // marginTop: 12
    },
    iconSearch: {
        position: 'absolute',
        height: 26,
        width: 26,
        marginLeft: 15,
        marginTop: 12
    },
    Class2: {
        flexDirection: 'row',
        marginTop: 25,
        width: 353,
        height: 54,
        borderRadius: 100,
        backgroundColor: '#E5E5E575',
        alignItems: 'center'
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
        marginTop: 30,
        justifyContent: 'center'

    }
})