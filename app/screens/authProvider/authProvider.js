// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const checkLogin = async () => {
        const savedMobile = await AsyncStorage.getItem('mobileNumber');
        setIsLoggedIn(!!savedMobile);
    };

    useEffect(() => {
        checkLogin();
    }, []);

    const logout = async () => {
        await AsyncStorage.removeItem('mobileNumber');
        setIsLoggedIn(false);
    };

    const login = async (mobile) => {
        await AsyncStorage.setItem('mobileNumber', mobile);
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
