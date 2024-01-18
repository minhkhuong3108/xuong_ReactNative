import {
    Text, View, Image, ImageBackground, TouchableOpacity,
    TextInput, KeyboardAvoidingView, Keyboard, Platform, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { icons, } from '../constants';
import { Alert } from 'react-native';
import FoodooItem from './FoodooItem';


function Foodoo({navigation}) {

    const backHome=()=>{
        navigation.goBack()
    }
    const [foods, setFoods] = useState([
        { id: 1, url: 'https://mcdonalds.vn/uploads/2018/food/burgers/bigmac_bb.png', name: "Extra Meat Burger", price: 9.99 },
        { id: 2, url: 'https://mcdonalds.vn/uploads/2018/food-categories/TIRAMISU.png', name: "Tiramisu Cake", price: 4.45 },
        { id: 3, url: 'https://mcdonalds.vn/uploads/2018/food-categories/croissant.png', name: "Croissant", price: 3.25 },
        { id: 4, url: 'https://mcdonalds.vn/uploads/2018/food-categories/CHOCO-BROWNIE.png', name: "Chocolate Cake", price: 5.29 },
        { id: 5, url: 'https://mcdonalds.vn/uploads/2018/food-categories/yogurt-dau.png', name: "Yogurl StrawBerry", price: 10.59 },
        { id: 6, url: 'https://mcdonalds.vn/uploads/2018/food/desserts/hotfudge_mcsundae.png', name: "Ice-cream Chocolate", price: 3.99 },
        { id: 7, url: 'https://mcdonalds.vn/uploads/2018/food/beverage/hero-pdt-Fanta-201703_0.png', name: "Fanta", price: 4.99 },
        { id: 8, url: 'https://mcdonalds.vn/uploads/2018/food/beverage/mcd-food-beverages-soft-drinks-coke.png', name: "Coca-Cola", price: 3.99 },
        { id: 9, url: 'https://mcdonalds.vn/uploads/2018/food/beverage/dasani_water.png', name: "Water", price: 2.99 },
        { id: 10, url: 'https://mcdonalds.vn/uploads/2018/food-categories/yogurt-kiwi.png', name: "Yogurl kiwi", price: 10.99 },
        { id: 11, url: 'https://mcdonalds.vn/uploads/2018/mccafe/hotmatcha.png', name: "Matcha-latte Hot", price: 5.99 },
        { id: 12, url: 'https://mcdonalds.vn/uploads/2018/mccafe/cappucino.png', name: "Capuchino Hot", price: 5.99 },
        { id: 13, url: 'https://mcdonalds.vn/uploads/2018/mccafe/americano.png', name: "Americano Hot", price: 5.99 },
        { id: 14, url: 'https://mcdonalds.vn/uploads/2018/mccafe/hotchoco.png', name: "Chocolate Hot ", price: 5.99 },
        { id: 15, url: 'https://mcdonalds.vn/uploads/2018/mccafe/hotlatte.png', name: "Latte Hot", price: 5.99 },
        { id: 16, url: 'https://mcdonalds.vn/uploads/2018/mccafe/mocha.png', name: "Mocha Hot", price: 5.99 },
        { id: 17, url: 'https://mcdonalds.vn/uploads/2018/food-categories/CSO_MilkCreamTea_S.png', name: " Milk Cream Tea", price: 4.99 },
        { id: 18, url: 'https://mcdonalds.vn/uploads/2018/mccafe/tacmuoi.png', name: "Soot clogging", price: 8.99 },
        { id: 19, url: 'https://mcdonalds.vn/uploads/2018/food/burgers/sausagebg_bb.png', name: "Burger Sausage", price: 2.99 },

    ])
    // Khởi tạo state cho giá trị đang nhập (searchText) và trạng thái người dùng đã bắt đầu nhập hay chưa (userStartedTyping)
    const [userStartedTyping, setUserStartedTyping] = useState(false);
    const [searchText, setSearchText] = useState('')

    // Hàm lọc dựa vào tên nhập vào TextInput để tìm sản phẩm , không phân biệt hoa thường
    const filteredFoods = () =>
        foods.filter(eachFood => eachFood.name.toLowerCase().
            includes(searchText.toLowerCase()))

    return (
        <View style={styles.container}>
            <View style={styles.Class1}>
                <Text style={styles.title}> Hot spots</Text>
                <TouchableOpacity onPress={backHome}
                    style={styles.icon}>
                <Image 
                    source={icons.muiTen}
                />
                </TouchableOpacity>
                
            </View>

            <View style={styles.Class2}
            >
                <Image
                    style={styles.iconSearch}
                    source={icons.search} />
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
                        renderItem={({ item }) =>
                            <FoodooItem
                                onPress={() => {
                                    Alert.alert(`Bạn đã chon ${item.name}`)
                                }}
                                foods={item}
                                key={item.name} />}
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
export default Foodoo

const styles = StyleSheet.create({
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
        flexDirection: 'row',
        marginTop: 25,
        width: 353,
        height: 54,
        borderRadius: 100,
        backgroundColor: '#E5E5E575',
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