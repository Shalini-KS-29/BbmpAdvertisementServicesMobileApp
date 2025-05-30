import { createSlice } from '@reduxjs/toolkit';

const sendOtpSlice = createSlice({
    name: 'sendOtp',
    initialState: {
        loading: false,
        error: null,
        sendOtpResponse: null,
    },
    reducers: {
        sendOtpRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        sendOtpSuccess: (state, action) => {
            state.loading = false;
            state.sendOtpResponse = action.payload;
        },
        sendOtpFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { sendOtpRequest, sendOtpSuccess, sendOtpFailure } = sendOtpSlice.actions;
export default sendOtpSlice.reducer;
