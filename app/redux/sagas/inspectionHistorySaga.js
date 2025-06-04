import { call, put, takeLatest } from "redux-saga/effects";

import { getAgencyList, getAgencyListDetails, setAgencyListFailure, setAgencyListSuccess } from "../slice/AgencyListSlice";
import { getAgencyListApi } from "../../api/agencyApi";
import { getInspectionHistory, setInspectionHistoryFailure, setInspectionHistorySuccess } from "../slice/inspectionHistortySlice";
import { getInspectionHistoryApi } from "../../api/inspectionHistoreApi";
import { setInspectionDetailsFailure, setInspectionDetailsSuccess } from "../slice/InspectionFormSlice";

function* inspectionHistory(data) {
    const { payload } = data;
    try {
        const response = yield call(getInspectionHistoryApi);
        if (response) {
            yield put(setInspectionHistorySuccess(response))
            // Save token or user data to AsyncStorage if needed
        } else {
            console.error('Inspection His failed', response);
            yield put(setInspectionHistoryFailure(response))
        }
    } catch (error) {
        console.error('error', error);
    }
}

export function* InspectionHistorySaga() {
    yield takeLatest(getInspectionHistory.type, inspectionHistory);
}