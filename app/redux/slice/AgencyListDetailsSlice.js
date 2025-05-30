import { createSlice } from '@reduxjs/toolkit';

const agencySlice = createSlice({
    name: 'agencyDetails',
    initialState: {
        loading: false,
        error: null,
        agencyResponse: null,
    },
    reducers: {
        getAgencyListDetails: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        setAgencyListDetailsSuccess: (state, action) => {
            state.loading = false;
            state.agencyResponse = action.payload;
        },
        setAgencyListDetailsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getAgencyListDetails, setAgencyListDetailsSuccess, setAgencyListDetailsFailure } = agencySlice.actions;
export default agencySlice.reducer;
