// src/redux/sagas/rootSaga.js
import { all, fork } from 'redux-saga/effects';
import { AgencyListDetailsSaga } from '../sagas/AgencyListDetailsSaga';
import { AgencyListSaga } from '../sagas/AgencyListSaga';
import { LoginSaga } from '../sagas/loginSaga';
import { SendOtpSaga } from '../sagas/sendOtpSaga';
import { VerifyOtpSaga } from '../sagas/verifyOtpSaga';
import { InspectionDetailsSaga } from '../sagas/inspectionDetailsSaga';
import { InspectionHistorySaga } from '../sagas/inspectionHistorySaga';

export default function* rootSaga() {
    try {
        yield all([
            fork(LoginSaga),
            fork(SendOtpSaga),
            fork(VerifyOtpSaga),
            fork(AgencyListDetailsSaga),
            fork(AgencyListSaga),
            fork(InspectionDetailsSaga),
            fork(InspectionHistorySaga),
        ]);
    } catch (error) {
        console.error("🔥 Error in rootSaga:", error);
    }
}


