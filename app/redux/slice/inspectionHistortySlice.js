import { createSlice } from '@reduxjs/toolkit';

const inspectionHistorySlice = createSlice({
    name: 'inspectionHistory',
    initialState: {
        loading: false,
        error: null,
        inspectionHistoryResponse: null,
    },
    reducers: {
        getInspectionHistory: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        setInspectionHistorySuccess: (state, action) => {
            state.loading = false;
            state.inspectionHistoryResponse = action.payload;
        },
        setInspectionHistoryFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getInspectionHistory, setInspectionHistorySuccess, setInspectionHistoryFailure } = inspectionHistorySlice.actions;
export default inspectionHistorySlice.reducer;
