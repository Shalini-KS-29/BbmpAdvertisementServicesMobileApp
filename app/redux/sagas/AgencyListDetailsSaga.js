import { call, put, takeLatest } from "redux-saga/effects";

import { getAgencyListDetails, setAgencyListDetailsFailure, setAgencyListDetailsSuccess, } from "../slice/AgencyListDetailsSlice";
import { getAgencyDetailsApi } from "../../api/agencyApi";

function* agencyListDetails({ payload }) {
    const id = payload;

    try {
        const response = yield call(getAgencyDetailsApi, id);
        if (response) {
            yield put(setAgencyListDetailsSuccess(response))
        } else {
            console.error('Wards failed', response);
            yield put(setAgencyListDetailsFailure(response))
        }
    } catch (error) {
        console.error('error', error);
    }
}

export function* AgencyListDetailsSaga() {
    yield takeLatest(getAgencyListDetails.type, agencyListDetails);
}