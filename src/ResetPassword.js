import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ResetPassword = () => {
    const [securePassword, setSecurePassword] = useState(true)
    const [secureForgotPassword, setSecureFogotPassword] = useState(true)

    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [erroMsg, setErroMsg] = useState('')

    
    const onPressResetPassword = () => {
        if (!password || password.trim().length === 0) {
            setIsPasswordValid(false)
            setErroMsg('Không được để trống password')
            return
        }
        setIsPasswordValid(true)
        setErroMsg('')
        return
    }
    return (
        <View style={styles.container}>
            <View style={styles.resetContainer}>
                <Text style={styles.resetText}>Reset your password</Text>
            </View>
            <View style={styles.enterContainer}>
                <Text style={styles.enterText}>Enter your password bellow</Text>
            </View>
            <View style={styles.inputPasswordContainer}>
                <TextInput
                    style={[styles.input, !isPasswordValid && styles.inputEro]}
                    placeholder='Password'
                    placeholderTextColor='#B4B4B4'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={securePassword}
                />
                <TouchableOpacity
                    style={styles.eye}
                    onPress={() => setSecurePassword(!securePassword)}
                >
                    <Image
                        source={require('../assets/images/eyes.png')}
                    />
                </TouchableOpacity>
                {
                    !isPasswordValid &&
                    <Text style={styles.textErroMsg}>{erroMsg}</Text>
                }
            </View>

            <View style={styles.inputFogotContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Forgot Password'
                    placeholderTextColor='#B4B4B4'
                    secureTextEntry={secureForgotPassword}
                />
                <TouchableOpacity
                    style={styles.eye}
                    onPress={() => setSecureFogotPassword(!secureForgotPassword)}
                >
                    <Image
                        source={require('../assets/images/eyes.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={onPressResetPassword}>
                    <Text style={styles.buttonText}>Reset password</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    textErroMsg:{
        color:'red',
        paddingHorizontal:25,
        paddingVertical:5
    },
    inputEro: {
        borderColor: 'red',
        borderWidth: 2
    },
    buttonText: {
        color: '#000',
        fontSize: 17,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 25.5,
        letterSpacing: -0.374
    },
    button: {
        widthL: '100%',
        height: 55,
        backgroundColor: '#FBDE3F',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputFogotContainer: {
        width: '100%',
        marginBottom: 211
    },
    eye: {
        width: 15,
        height: 15,
        position: 'absolute',
        right: 20,
        top: 20
    },
    input: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22.5,
        letterSpacing: -0.33,
        paddingHorizontal: 34,
        paddingVertical: '16',
        height: 55,
        borderRadius: 100,
        borderWidth: 1
    },
    inputPasswordContainer: {
        width: '100',
        marginBottom: 25,
    },
    enterText: {
        color: '#000',
        fontSize: 13,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 19.5,
        letterSpacing: -0.286
    },
    enterContainer: {
        width: '100%',
        marginBottom: 84,
        paddingHorizontal: 11
    },
    resetText: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 36,
        letterSpacing: -0.528

    },
    resetContainer: {
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 11
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        padding: 26
    }
})