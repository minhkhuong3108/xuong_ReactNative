import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  const pressLogin=()=>{
    navigation.navigate('Login')
  }

  const pressSignUp=()=>{
    navigation.navigate('Sign up')
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image source={require('../assets/images/welcome.png')}/>
      </View>

      <Text style={styles.txtHeading}>Welcome to Super Foodo</Text>
      <Text style={styles.txtSubHead}>Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque </Text>

      <TouchableOpacity style={styles.btnSign} onPress={pressSignUp}>
        <Text style={styles.txtBtn}>Create account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLogin} onPress={pressLogin}>
        <Text style={styles.txtBtn}>Login</Text>
      </TouchableOpacity>

      <View style={styles.viewTxtEnd}>
        <Text style={styles.txtBlack}>By</Text>
        <TouchableOpacity>
             <Text style={styles.txtBold}> Registering</Text>
         </TouchableOpacity>
         <Text style={styles.txtBlack}> or</Text>
        <TouchableOpacity>
            <Text style={styles.txtBold}> Login</Text>
        </TouchableOpacity>
        <Text style={styles.txtBlack}> you have agreed to these</Text>           
            <TouchableOpacity>
            <Text style={styles.txtBold}> Terms and Conditions.</Text>
        </TouchableOpacity> 
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    txtBlack:{
        color:'#000'
    },
    txtBold:{
        fontWeight:'bold',
        color:'#000'
    },
    viewTxtEnd:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        marginTop:40,
    },
    btnLogin:{
        width:'100%',
        height:55,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:100,
        marginTop:14,
        borderWidth:1,
        borderColor:'#000'
    },
    txtBtn:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000'
    },
    btnSign:{
        width:'100%',
        height:55,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FBDE3F',
        borderRadius:100,
        marginTop:40
    },
    txtSubHead:{
        marginTop:13,
        fontSize:14,
        textAlign:'center',
        color:'#000'
    },
    txtHeading:{
        fontSize:26,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        marginTop:40,
    },  
   
    viewImg:{
        alignItems:'center',
        marginTop:60
    },  
    container:{
        flex:1,
        flexDirection:'column',
        padding:24
    }
})