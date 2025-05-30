import { createSlice } from '@reduxjs/toolkit';

const verifyOtpSlice = createSlice({
    name: 'verifyOtp',
    initialState: {
        loading: false,
        error: null,
        verifyOtpResponse: null,
    },
    reducers: {
        verifyOtpRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        verifyOtpSuccess: (state, action) => {
            state.loading = false;
            state.verifyOtpResponse = action.payload;
        },
        verifyOtpFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { verifyOtpRequest, verifyOtpSuccess, verifyOtpFailure } = verifyOtpSlice.actions;
export default verifyOtpSlice.reducer;
