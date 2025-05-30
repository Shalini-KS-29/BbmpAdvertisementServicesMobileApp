import { call, put, takeLatest } from "redux-saga/effects";
import { getInspectionDetails, setInspectionDetailsFailure, setInspectionDetailsSuccess } from "../slice/InspectionFormSlice";
import { uploadInspectionData } from "../../api/inspectionDetailsApi";

function* inspectionDetails(data) {
    const { payload } = data;
    try {
        const response = yield call(uploadInspectionData, payload);
        if (response) {
            yield put(setInspectionDetailsSuccess(response))
        } else {
            yield put(setInspectionDetailsFailure(response))
        }
    } catch (error) {
        console.error('error', error);
    }
}

export function* InspectionDetailsSaga() {
    yield takeLatest(getInspectionDetails.type, inspectionDetails);
}