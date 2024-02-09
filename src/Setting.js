import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewAvatar}>
        <Image source={require('../assets/images/Setting/avatar.png')}/>
        <Text style={styles.txtName}>Jason Norm</Text>
      </View>

      <View style={styles.viewFeature}>
        <View style={styles.viewFeatureItem}>
          <View  style={styles.imgFeatureItem}>
            <Image source={require('../assets/images/Setting/person.png')}/>
          </View>         
          <Text style={styles.txtFeatureItem}>View profile</Text>
          <View  style={styles.imgFeatureItemArrow}>
            <Image source={require('../assets/images/Setting/arrow_right.png')}/>
          </View> 
        </View>

        <View style={styles.viewFeatureItem}>
          <View  style={styles.imgFeatureItem}>
            <Image source={require('../assets/images/Setting/voucher.png')}/>
          </View>         
          <Text style={styles.txtFeatureItem}>Vouchers/offers</Text>
          <View  style={styles.imgFeatureItemArrow}>
            <Image source={require('../assets/images/Setting/arrow_right.png')}/>
          </View> 
        </View>

        <View style={styles.viewFeatureItem}>
          <View  style={styles.imgFeatureItem}>
            <Image source={require('../assets/images/Setting/address.png')}/>
          </View>         
          <Text style={styles.txtFeatureItem}>Addresses</Text>
          <View  style={styles.imgFeatureItemArrow}>
            <Image source={require('../assets/images/Setting/arrow_right.png')}/>
          </View> 
        </View>

        <View style={styles.viewFeatureItem}>
          <View  style={styles.imgFeatureItem}>
            <Image source={require('../assets/images/Setting/order.png')}/>
          </View>         
          <Text style={styles.txtFeatureItem}>Orders</Text>
          <View  style={styles.imgFeatureItemArrow}>
            <Image source={require('../assets/images/Setting/arrow_right.png')}/>
          </View> 
        </View>

        <View style={styles.viewFeatureItem}>
          <View  style={styles.imgFeatureItem}>
            <Image source={require('../assets/images/Setting/help.png')}/>
          </View>         
          <Text style={styles.txtFeatureItem}>Help center</Text>
          <View  style={styles.imgFeatureItemArrow}>
            <Image source={require('../assets/images/Setting/arrow_right.png')}/>
          </View> 
        </View>

        <View style={styles.viewFeatureItem}>
          <View  style={styles.imgFeatureItem}>
            <Image source={require('../assets/images/Setting/gift.png')}/>
          </View>         
          <Text style={styles.txtFeatureItem}>Invite friends</Text>
          <View  style={styles.imgFeatureItemArrow}>
            <Image source={require('../assets/images/Setting/arrow_right.png')}/>
          </View> 
        </View>
      </View>
      <View style={styles.viewFeatureNoImg}>
        <View style={styles.viewTxtFeatureNoImg}>
          <Text style={styles.txtFeatureNoImg}>Settings</Text>
          <Text style={styles.txtFeatureNoImg}>Terms & Condition / Privacy</Text>
          <Text style={styles.txtFeatureNoImg}>Log out</Text>
        </View>  
        </View>
    </ScrollView>
  )
}

export default Setting

const styles = StyleSheet.create({
  viewTxtFeatureNoImg:{
    paddingHorizontal:40
  },
  txtFeatureNoImg:{
    color:'#000',
    fontSize:16,
    fontWeight:'bold',
    marginBottom:28
  },
  viewFeatureNoImg:{
    paddingTop:22,
    borderTopWidth:1,
    borderTopColor:'#0000001F'
  },
  imgFeatureItemArrow:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  imgFeatureItem:{
    flex:2
  },
  txtFeatureItem:{
    fontSize:16,
    color:'#000',
    fontWeight:'bold',
    flex:6
  },
  viewFeatureItem:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:18
  },
  viewFeature:{
    marginTop:18,
    paddingHorizontal:40,
  },
  txtName:{
    fontSize:18,
    color:'#000',
    fontWeight:'bold',
  },
  viewAvatar: {
    backgroundColor:'#FBDE3F',
    height: 236,
    justifyContent: 'center',
    alignItems:'center'
  },  
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
})