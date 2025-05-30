import { call, put, takeLatest } from "redux-saga/effects";
import { verifyOtpApi } from "../../api/loginApi";
import { verifyOtpFailure, verifyOtpRequest, verifyOtpSuccess } from "../slice/verifyOtpSlice";

function* verifyOtp(data) {
    const { payload } = data;
    try {
        const response = yield call(verifyOtpApi, payload);
        if (response) {
            yield put(verifyOtpSuccess(response))
        } else {
            yield put(verifyOtpFailure(response))
        }
    } catch (error) {
        console.error('error', error);
    }
}

export function* VerifyOtpSaga(otp) {
    yield takeLatest(verifyOtpRequest.type, verifyOtp);
}