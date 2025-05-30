import { call, takeLatest } from "redux-saga/effects";
import { sendOtpApi } from "../../api/loginApi";
import { sendOtpRequest } from "../slice/sendOtpSlice";

function* sendOtp() {
    try {
        const response = yield call(sendOtpApi);
        if (response) {
            // Save token or user data to AsyncStorage if needed
        } else {
        }

    } catch (error) {
        console.error('error', error);
    }

}

export function* SendOtpSaga() {
    yield takeLatest(sendOtpRequest.type, sendOtp);
}