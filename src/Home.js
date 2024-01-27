import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
  const pressHot = () => {
    navigation.navigate('ProductHot')
  }

  const pressProductDetails = () => {
    navigation.navigate('ProductDetails')
  }
  const pressProductFeature=()=>{
    navigation.navigate('ProductFeatured')
  }

  const [search, setSearch] = useState('')

  const [category, setCatogery] = useState(loai)
  const renderItemCategory = ({ item, index }) => {
    const { id, name, img } = item
    return (
      <View style={[styles.viewCategory, index === category.length - 1 && styles.itemLast]} >
        <TouchableOpacity style={styles.btnCategory}>
          <Image source={img} />
        </TouchableOpacity>
        <Text style={styles.txtNameCatogory}>{name}</Text>
      </View>

    )
  }

  const [feature, setFeature] = useState(sanPhamTuongLai)
  const [favorited, setFavorited] = useState(0)
  const renderItemFeature = ({ item, index }) => {
    const { id, name, price, ship, rate, sale, img } = item
    return (
      <View style={[styles.viewFeature, index === feature.length - 1 && styles.itemLast]}>
        <View style={styles.viewSale}>
          <Text style={styles.txtSale}>{sale}</Text>
        </View>

        <TouchableOpacity style={styles.btnFavorite} onPress={() => { setFavorited(id) }}>
          {
            id === favorited ? <Image style={styles.imgFavorite} source={require('../assets/images/home/product_feature/favorite.png')} />
              : <Image style={styles.imgFavorite} source={require('../assets/images/home/product_feature/no_favorite.png')} />

          }
        </TouchableOpacity>

        <Image source={img} style={styles.imgFeature} />

        <View style={styles.viewDesFeature}>
          <View style={styles.viewNameFeature}>
            <Text style={styles.txtNameFeature}>{name}</Text>
            <Text style={styles.txtPriceFeature}>${price} {ship}</Text>
          </View>

          <View style={styles.viewRate}>
            <Text style={styles.txtRate}>{rate}</Text>
          </View>
        </View>

      </View>
    )
  }

  const [hot, setHot] = useState(sanPhamHot)
  const renderItemHot = ({ item, index }) => {
    const { id, name, price, img } = item
    return (
      <Pressable style={[styles.viewHot, index === hot.length - 1 && styles.itemLast]} onPress={pressProductDetails}>
        <View style={styles.viewImgHot}>
          <Image source={img} />
        </View>
        <View style={styles.viewSubHot}>
          <Text style={styles.txtNameHot}>{name}</Text>
          <Text style={styles.txtPriceHot}>
            <Text style={{ color: '#FFC532' }}>$</Text>
            {price}
          </Text>
        </View>
      </Pressable>
    )
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.viewHeader}>
        <View style={styles.viewTxtHead}>
          <Text style={styles.txtHead}>Deliver now</Text>
          <View style={styles.viewSubText}>
            <Text style={styles.txtHeadBold}>Madni Town</Text>
            <Image source={require('../assets/images/home/down.png')} />
          </View>
        </View>

        <View style={styles.viewImgHead}>
          <TouchableOpacity style={styles.btnHead}>
            <Image source={require('../assets/images/home/bag.png')} />
          </TouchableOpacity>

          <View style={styles.viewImgHead2}>
            <Image source={require('../assets/images/home/person_busy.png')} />
          </View>
        </View>
      </View>

      <View style={styles.viewSearch}>
        <TouchableOpacity style={styles.btnSearch}>
          <Image source={require('../assets/images/home/search.png')} />
        </TouchableOpacity>

        <TextInput
          placeholder='Search Super Foodoo'
          placeholderTextColor={'#0000009E'}
          value={search}
          onChangeText={text => setSearch(text)}
          style={styles.inpSearch}
        />
      </View>

      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={renderItemCategory}
          key={item => item.id}
        />
      </View>


      <View style={styles.viewMenu}>
        <Text style={styles.txtMenu}>Featured on Super Foodoo</Text>

        <TouchableOpacity style={styles.btnMenu} onPress={pressProductFeature}>
          <Image source={require('../assets/images/home/right.png')} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={feature}
          renderItem={renderItemFeature}
          key={item => item.key}
        />
      </View>

      <View style={styles.viewMenu}>
        <Text style={styles.txtMenu}>Hot spots</Text>

        <TouchableOpacity style={styles.btnMenu} onPress={pressHot}>
          <Image source={require('../assets/images/home/right.png')} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={hot}
          renderItem={renderItemHot}
          key={item => item.id}
        />
      </View>


    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  txtNameHot: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  txtPriceHot: {
    marginBottom: 13,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 17
  },
  viewImgHot: {
    width: 156,
    height: 50,
    zIndex: 1,
    alignItems: 'center',
  },
  viewSubHot: {
    width: 159,
    height: 133,
    elevation: 3,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10
  },
  viewHot: {
    flexDirection: 'column',
    marginRight: 40,
    height: 208,
    marginBottom:20
  },
  imgFavorite: {
    width: 22,
    height: 22,

  },
  btnFavorite: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 9
  },
  txtSale: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  viewSale: {
    position: 'absolute',
    height: 19,
    backgroundColor: '#FFDD22',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 1,
    top: 15,
    left: 0,
    paddingHorizontal: 8
  },
  txtRate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  viewRate: {
    width: 31,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 31 / 2
  },
  txtPriceFeature: {
    fontSize: 12
  },
  txtNameFeature: {
    fontSize: 17,
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
    marginTop: 10
  },
  imgFeature: {
    width: 255,
    height: 143,
    borderRadius: 10
  },
  viewFeature: {
    flexDirection: 'column',
    marginRight: 17,
  },
  btnMenu: {
    width: 31,
    height: 27,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 31 / 2
  },
  txtMenu: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
  },
  viewMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 17
  },
  itemLast: {
    marginRight: 0
  },
  txtNameCatogory: {
    color: '#000',
    fontSize: 16
  },
  btnCategory: {
    width: 80,
    height: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 1,
    marginBottom: 5
  },
  viewCategory: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 30
  },
  viewSearch: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#E5E5E575',
    borderRadius: 50,
    height: 54,
    paddingHorizontal: 20,
    marginVertical: 25
  },
  btnSearch: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inpSearch: {
    marginLeft: 13
  },
  viewImgHead2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7
  },
  btnHead: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewImgHead: {
    width: 75,
    height: 37,
    backgroundColor: '#F3F3F3',
    elevation: 1,
    borderRadius: 25,
    flexDirection: 'row',
  },
  txtHead: {
    color: '#000',
    fontSize: 16
  },
  txtHeadBold: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
    color: '#000',
  },
  viewSubText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTxtHead: {
    flexDirection: 'column',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  }
})

var sanPhamHot = [
  {
    'id': 'hot1',
    'name': 'Mc Double',
    'price': 20.99,
    'img': require('../assets/images/home/product_hot/product1.png')
  },

  {
    'id': 'hot2',
    'name': 'Supreme Pizza',
    'price': 15.99,
    'img': require('../assets/images/home/product_hot/product2.png')
  },

  {
    'id': 'hot3',
    'name': 'Chicken Wings',
    'price': 25.99,
    'img': require('../assets/images/home/product_hot/product3.png')
  }
]

var sanPhamTuongLai = [
  {
    'id': 'ft1',
    'name': 'McDonald’s(Best Offer)',
    'price': 4.99,
    'ship': 'Delivery Fee . 15-30 min',
    'sale': 'Free Item(Spend $10)',
    'rate': 4.5,
    'img': require('../assets/images/home/product_feature/product1.png')
  },

  {
    'id': 'ft2',
    'name': 'Supreme Pizza',
    'price': 2.99,
    'ship': 'Delivery Fee . 15-30 min',
    'sale': 'Buy 1 Get 1 Free',
    'rate': 4.4,
    'img': require('../assets/images/home/product_feature/product2.png')
  }
]

var loai = [
  {
    "id": 'burger',
    'name': 'Burgers',
    'img': require('../assets/images/home//category/burger.png')
  },

  {
    "id": 'pizza',
    'name': 'Pizza',
    'img': require('../assets/images/home//category/pizza.png')
  },

  {
    "id": 'meat',
    'name': 'Meat',
    'img': require('../assets/images/home//category/meat.png')
  },

  {
    "id": 'ice',
    'name': 'Icecream',
    'img': require('../assets/images/home//category/ice_cream.png')
  },
]