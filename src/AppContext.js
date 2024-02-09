import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvide = (props) => {
    const { children } = props
    const [cart, setCart] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    return (
        <AppContext.Provider value={{ cart, setCart, isLogin, setIsLogin }}>
            {children}
        </AppContext.Provider>
    )
}