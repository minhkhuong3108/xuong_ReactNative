import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [search, setSearch] = useState('')

  const [category, setCatogery] = useState(loai)
  const renderItem = ({ item, index }) => {
    const { id, name, img } = item
    return (
      <View style={[styles.viewCategory, index ===category.length-1  && styles.itemLast]} >
        <Pressable style={styles.btnCategory}>
          <Image source={img} />
        </Pressable>
        <Text>{name}</Text>
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.viewTxtHead}>
          <Text>Deliver now</Text>
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

      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={category}
      renderItem={renderItem}
      key={item => item.id}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  itemLast:{
    marginRight:0
  },
  btnCategory:{
    width:80,
    height:65,
    borderRadius:10,
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:'#fff',
    elevation:1,
    marginBottom:5
  },
  viewCategory:{
    flexDirection:'column',
    alignItems:'center',
    marginRight:30
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
    borderRadius: 25,
    flexDirection: 'row',
  },
  txtHeadBold: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5
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
    padding: 20
  }
})

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