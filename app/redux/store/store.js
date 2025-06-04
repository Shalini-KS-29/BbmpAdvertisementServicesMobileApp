// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import loginReducer from '../slice/loginSlice';
import sendOtpReducer from '../slice/sendOtpSlice';
import verifyOtpReducer from '../slice/verifyOtpSlice';
import agencyListDetailsReducer from '../slice/AgencyListDetailsSlice';
import agencyListReducer from '../slice/AgencyListSlice';
import inspectionDetailsReducer from '../slice/InspectionFormSlice';
import authReducer from '../slice/authSlice';
import inspectionHistoryReducer from '../slice/inspectionHistortySlice';

const createSagaMiddleware = require('redux-saga').default;
const saga = require('redux-saga');

const sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
  // console.log('🔥 Dispatching:', action);
  return next(action);
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
    sendOtp: sendOtpReducer,
    verifyOtp: verifyOtpReducer,
    agencyList: agencyListReducer,
    agencyDetails: agencyListDetailsReducer,
    inspectionDetails: inspectionDetailsReducer,
    inspectionHistory: inspectionHistoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false, // Disable serializable state invariant middleware
    }).concat(logger, sagaMiddleware),
});

// console.log("🌀 Running saga middleware...");
sagaMiddleware.run(rootSaga);


export default store;
