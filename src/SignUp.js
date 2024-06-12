import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import AxiosInstance from './helpers/AxiosInstance'
import Login from './Login'

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')
    const [name, setName] = useState('tii')

    // const pressRegister= async()=>{
    //     try {
    //         if(pass!==rePass){
    //             Alert.alert('Password không khớp')
    //             return;
    //         }
    //         const body = {
    //             email:email,
    //             password:pass,
    //         }
    //         const response= await AxiosInstance().post('/users', body)
    //         console.log(response)
    //         if(response.status==true){
    //             navigation.navigate('Login')
    //         }else{
    //             Alert.alert('Đăng ký thất bại')
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         Alert.alert('Đăng ký có lỗi')
    //     }
    // }
    const handlePress = ()=>{
        navigation.navigate('Login')
    }
    const handleLogin=()=>{
        Alert.alert('Đăng ký thành công')
        navigation.navigate('Login')
    }
    const [hiddenPass, setHiddenPass] = useState(true)
    const [hiddenRePass, setHiddenRePass] = useState(true)
  return (
    <View style={styles.container}>
        <View style={styles.viewImg}>
            <Image source={require('../assets/images/logoLogin.png')}/>
        </View>

        <TextInput style={styles.textInput} placeholder='Username' value={email} onChangeText={(text)=> setEmail(text)}/>
        
        <View style={styles.viewPass}>
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={hiddenPass} value={pass} onChangeText={(text)=> setPass(text)}/>
            <TouchableOpacity style={styles.imgEyes} onPress={()=> setHiddenPass(!hiddenPass)}>
                {
                hiddenPass ? <Image  source={require('../assets/images/eyes.png')}/>: <Image source={require('../assets/images/eyes.png')}/>
                }
            </TouchableOpacity>
        </View>

        <View style={styles.viewPass}>
            <TextInput style={styles.textInput} placeholder='Confirm Password' secureTextEntry={hiddenRePass} value={rePass} onChangeText={(text)=> setRePass(text)}/>
            <TouchableOpacity style={styles.imgEyes} onPress={()=> setHiddenRePass(!hiddenRePass)}>
                {
                hiddenRePass ? <Image  source={require('../assets/images/eyes.png')}/>: <Image source={require('../assets/images/eyes.png')}/>
                }
            </TouchableOpacity>
        </View>

        <View style={styles.viewRemember}>
            {/* <BouncyCheckbox fillColor='#1877f2' text='Remember me' textStyle={{textDecorationLine: 'none'}}/> */}
            {/* <Text style={{color:'#000', fontWeight: '500'}}>Forgot the password ?</Text> */}
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
            <Text style={styles.textLogin}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.viewOr}>
            <Text style={styles.textOr}>or continue with</Text>
        </View>

        <Pressable style={styles.btnSocial}>
            <Image source={require('../assets/images/icon_gg.png')} style={styles.imgIcon}/>
            <Text style={styles.textSocial}>Sign Up with Google</Text>
        </Pressable>

        <Pressable style={styles.btnSocial}>
            <Image source={require('../assets/images/icon_fb.png')} style={styles.imgIcon}/>
            <Text style={styles.textSocial}>Sign Up with Facebook</Text>
        </Pressable>

        <View style={styles.viewLogin}>
            <Text>Don’t have an account? </Text>
            <Text style={styles.textBold} onPress={handlePress}>Log in</Text>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    viewPass:{
        flexDirection:'row',
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
    viewLogin:{
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