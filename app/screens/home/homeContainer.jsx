import React, { useEffect, useState } from 'react';
import HomeScreen from './homeScreen';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAgencyListDetails } from '../../redux/slice/AgencyListDetailsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeContainer = (props) => {
    const route = useRoute();
    const id = route?.params?.id;
    const dispatch = useDispatch();

    useEffect(() => {
        getLatLong()
    }, [])

    const getLatLong = async () => {
        const latitude = '';
        const longitude = '';
        latitude = await AsyncStorage.getItem('latitude');
        longitude = await AsyncStorage.getItem('longitude');
        console.log("lat long", latitude, longitude)
    }

    const agencyDetails = useSelector((state) => state.agencyDetails?.agencyResponse);
    const details = agencyDetails?.data

    useEffect(() => {
        dispatch(getAgencyListDetails(id))
    }, [])

    return (
        <HomeScreen listData={details} id={id}  {...props} />
    );
};
export default HomeContainer;