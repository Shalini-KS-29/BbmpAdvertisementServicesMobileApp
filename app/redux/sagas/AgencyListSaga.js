import { call, put, takeLatest } from "redux-saga/effects";

import { getAgencyList, getAgencyListDetails, setAgencyListFailure, setAgencyListSuccess } from "../slice/AgencyListSlice";
import { getAgencyListApi } from "../../api/agencyApi";

function* agencyList(data) {
    const { payload } = data;


    try {
        const response = yield call(getAgencyListApi);
        if (response) {
            yield put(setAgencyListSuccess(response))
            // Save token or user data to AsyncStorage if needed
        } else {
            console.error('List failed', response);
            yield put(setAgencyListFailure(response))
        }

    } catch (error) {
        console.error('error', error);
    }

}

export function* AgencyListSaga() {

    yield takeLatest(getAgencyList.type, agencyList);
}