import { createSlice } from '@reduxjs/toolkit';

const inspectionFormSlice = createSlice({
    name: 'inspectionDetails',
    initialState: {
        loading: false,
        error: null,
        inspectionDetailsResponse: null,
    },
    reducers: {
        getInspectionDetails: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        setInspectionDetailsSuccess: (state, action) => {
            state.loading = false;
            state.inspectionDetailsResponse = action.payload;
        },
        setInspectionDetailsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getInspectionDetails, setInspectionDetailsSuccess, setInspectionDetailsFailure } = inspectionFormSlice.actions;
export default inspectionFormSlice.reducer;
