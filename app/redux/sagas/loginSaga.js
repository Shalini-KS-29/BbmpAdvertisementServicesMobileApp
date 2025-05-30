import { call, put, takeLatest } from "redux-saga/effects";
import { getToken } from "../../api/loginApi";
import { loginFailure, loginRequest, loginSuccess } from "../slice/loginSlice";
import { sendOtpApi } from "../../api/loginApi";
import { sendOtpFailure, sendOtpRequest, sendOtpSuccess } from "../slice/sendOtpSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

function* loginSaga(data) {
    const { payload } = data;
    const mobileNo = payload;
    try {
        const response = yield call(getToken);
        if (response) {
            yield put(loginSuccess(response))
            AsyncStorage.setItem('token', response?.token)
            if (response?.token) {
                const otpResponse = yield call(sendOtpApi, response?.token, mobileNo);
                if (otpResponse) {
                    yield put(sendOtpSuccess(otpResponse))
                } else {
                    yield put(sendOtpFailure(otpResponse))
                }
            }
        } else {
            yield put(loginFailure(response))
        }

    } catch (error) {
        console.error('error', error);
    }
}

export function* LoginSaga() {
    yield takeLatest(loginRequest.type, loginSaga);
}