import { createSlice } from '@reduxjs/toolkit';

const agencyListSlice = createSlice({
    name: 'agencyList',
    initialState: {
        loading: false,
        error: null,
        agencyListResponse: null,
    },
    reducers: {
        getAgencyList: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        setAgencyListSuccess: (state, action) => {
            state.loading = false;
            state.agencyListResponse = action.payload;
        },
        setAgencyListFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getAgencyList, setAgencyListSuccess, setAgencyListFailure } = agencyListSlice.actions;
export default agencyListSlice.reducer;
