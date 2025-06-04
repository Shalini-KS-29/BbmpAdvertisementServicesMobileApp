import React, { useEffect } from 'react';
import InspectionHistory from './inspectionHistoryScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getInspectionHistory } from '../../redux/slice/inspectionHistortySlice';

const InspectionHistoryContainer = (props) => {
    const dispatch = useDispatch();
    const historyResponse = useSelector((state) => state.inspectionHistory.inspectionHistoryResponse);

    useEffect(() => {
        dispatch(getInspectionHistory())
    }, [])
    return (
        <InspectionHistory historyResponse={historyResponse} {...props} />
    );
};
export default InspectionHistoryContainer;