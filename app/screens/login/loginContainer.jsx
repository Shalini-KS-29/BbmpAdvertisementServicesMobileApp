import React from 'react';
import LoginScreen from './loginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/slice/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyOtpRequest } from '../../redux/slice/verifyOtpSlice';

const LoginContainer = (props) => {

    const dispatch = useDispatch();
    const loginResponse = useSelector((state) => state.sendOtp?.sendOtpResponse);
    const verifyOtpResponse = useSelector((state) => state.verifyOtp?.verifyOtpResponse);

    const loginApi = (mobileNo) => {
        dispatch(loginRequest(mobileNo))
    }

    const verifyOtpApi = (otp, mobileNo) => {
        const data = { "otp": otp, "mobileNo": mobileNo }
        dispatch(verifyOtpRequest(data))
    }

    return (
        <LoginScreen verifyOtpResponse={verifyOtpResponse} verifyOtpApi={verifyOtpApi} loginResponse={loginResponse} loginApi={loginApi} {...props} />
    );
};
export default LoginContainer;