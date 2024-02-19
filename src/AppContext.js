import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvide = (props) => {
    const { children } = props
    const [cart, setCart] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const [history, setHistory] = useState([])
    console.log(history);
    console.log(cart);
    return (
        <AppContext.Provider value={{ cart, setCart, isLogin, setIsLogin, history, setHistory }}>
            {children}
        </AppContext.Provider>
    )
}