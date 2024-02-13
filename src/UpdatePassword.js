import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const UpdatePassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boderContainer}>
                <TextInput
                    style={styles.boder}
                />
                <Image
                    style={styles.khien}
                    source={require('../assets/images/UpdatePassword/khien.png')} />
                <Image
                    style={styles.dauTich}
                    source={require('../assets/images/UpdatePassword/dautich.png')}
                />
            </View>

            <View style={styles.text1Container}>
                <Text style={styles.text1}>Password updated</Text>
            </View>

            <View style={styles.text2Container}>
                <Text style={styles.text2}>Congratulation your password has been updated</Text>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity
                style={styles.inputContinue}>
                    <Text style={styles.continueLabel}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UpdatePassword

const styles = StyleSheet.create({
    continueLabel:{
        color:'#000',
        fontSize:17,
        fontStyle:'normal',
        fontWeight:'600',
        lineHeight:25.5,
        letterSpacing:-0.374,
        textAlign:'center'
    },
    inputContinue:{
        width:'100%',
        backgroundColor:'#FBDE3F',
        borderRadius:100,
        height:55,
        justifyContent: 'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'100%',
    },
    text2:{
        color:'#000',
        fontSize:13,
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:19.5,
        letterSpacing:-0.286,
        textAlign:'center'
    },
    text2Container:{
        width:190,
        marginBottom:250
    },
    text1:{
        color:'#000',
        fontSize:24,
        fontStyle:'normal',
        fontWeight:'600',
        lineHeight:36,
        letterSpacing:-0.528
    },
    text1Container:{
        marginBottom:19
    },
    dauTich: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 32
    },
    khien: {
        with: '100%',
        height: 31,
        position: 'absolute',
        top: 30
    },
    boder: {
        width: 81,
        height: 81,
        backgroundColor: '#FBDE3F',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:22
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
    }
})