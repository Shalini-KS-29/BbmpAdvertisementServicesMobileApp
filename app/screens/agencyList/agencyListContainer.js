import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import AgencyListScreen from './agencyListScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getAgencyList } from '../../redux/slice/AgencyListSlice';

const AgencyListContainer = (props) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.agencyList?.agencyListResponse);

    useEffect(() => {
        dispatch(getAgencyList())
    }, [])

    return (
        <AgencyListScreen agencyListData={data} {...props} />
    );
};
export default AgencyListContainer;