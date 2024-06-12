import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
// khai báo stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from './AppContext';

const Login = ({navigation}) => {
    // const {isLogin, setIsLogin} = useContext(AppContext)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const handlePress = ()=>{
        navigation.navigate('Sign up')
    }
    
    const pressHome=()=>{
    
        navigation.navigate('Home')
    }
    const [hiddenPass, setHiddenPass] = useState(true)
  return (
    
    <View style={styles.container}>
        <View style={styles.viewImg}>
            <Image source={require('../assets/images/logoLogin.png')}/>
        </View>

        {/* <Text>Username</Text> */}
        <TextInput style={styles.textInput} placeholder='Username'/>
        {/* <Text>Password</Text> */}

        <View style={styles.viewPass}>
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={hiddenPass}/>
            <TouchableOpacity style={styles.imgEyes} onPress={()=> setHiddenPass(!hiddenPass)}>
                {
                hiddenPass ? <Image  source={require('../assets/images/eyes.png')}/>: <Image source={require('../assets/images/eyes.png')}/>
                }
            </TouchableOpacity>
        </View>

        <View style={styles.viewRemember}>
            {/* <BouncyCheckbox fillColor='#1877f2' text='Remember me' textStyle={{textDecorationLine: 'none'}}/> */}
            <Text style={{color:'#000', fontWeight: '500'}}>Forgot the password ?</Text>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={()=>{pressHome}}>
            <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <View style={styles.viewOr}>
            <Text style={styles.textOr}>or continue with</Text>
        </View>

        <Pressable style={styles.btnSocial}>
            <Image source={require('../assets/images/icon_gg.png')} style={styles.imgIcon}/>
            <Text style={styles.textSocial}>Login with Google</Text>
        </Pressable>

        <Pressable style={styles.btnSocial}>
            <Image source={require('../assets/images/icon_fb.png')} style={styles.imgIcon}/>
            <Text style={styles.textSocial}>Login with Facebook</Text>
        </Pressable>

        <View style={styles.viewSign}>
            <Text>Don’t have an account? </Text>
            <Text style={styles.textBold} onPress={handlePress}>Sign up</Text>
        </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    viewPass:{
        flexDirection:'row'
    },
    imgEyes:{
        position:'absolute',
        top:23,
        right:25,
    },
    textBold:{
        fontWeight:'bold',
        color:'#000'
    },  
    viewSign:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30
    },  
    btnSocial:{
        flexDirection:'row',
        height:55,
        borderRadius:100,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },  
    textSocial:{
        color:'#000',
        fontSize:16,
        fontWeight:'500',
        marginLeft:10
    },      
    imgIcon:{
        width:24,
        height:24,
    },  
    textOr:{
        fontSize:15,
        fontWeight: 'bold',
        textTransform:'uppercase'
    },  
    viewOr:{
        alignItems:'center',
        marginTop: 40
    },  
    textLogin:{
        color:'#000',
        fontWeight:'bold',
        fontSize:17,
        textTransform:'uppercase'
    },  
    btnLogin:{
        height:55,
        backgroundColor:'#FBDE3F',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    viewRemember:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:20
    },
    textInput:{
        width:'100%',
        height:55,
        borderRadius:100,
        borderWidth:1,
        marginTop:4,
        marginBottom:20,
        paddingHorizontal:30
    },
    viewImg:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:80,
        marginBottom:40
    },  
    container:{
        flex:1,
        marginHorizontal:24
    }
})