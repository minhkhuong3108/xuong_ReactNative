import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvide = (props) => {
    const { children } = props
    const [cart, setCart] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const [history, setHistory] = useState([])
    const [favorited, setFavorited] = useState([])
    console.log(history);
    return (
        <AppContext.Provider value={{ cart, setCart, isLogin, setIsLogin, history, setHistory, favorited, setFavorited }}>
            {children}
        </AppContext.Provider>
    )
}