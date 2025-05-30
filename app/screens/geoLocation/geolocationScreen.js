import { Platform, PermissionsAndroid, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestLocationPermission = async () => {
    try {
        if (Platform.OS === 'ios') {
            const res = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            if (res === RESULTS.GRANTED) {
                getCurrentLocation();
            } else {
                Alert.alert('Permission Denied', 'Location permission is required');
            }
        } else {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getCurrentLocation();
            } else {
                Alert.alert('Permission Denied', 'Location permission is required');
            }
        }
    } catch (err) {
        console.warn(err);
    }
};

const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
        (position) => {

            const lat = position.coords.latitude.toString();
            const long = position.coords.longitude.toString();
            console.log("start lat", lat)
            console.log("start long", long)

            AsyncStorage.setItem('latitude', lat);
            AsyncStorage.setItem('longitude', long);


            // AsyncStorage.setItem('Latitude', lat)
            // AsyncStorage.setItem('Longitude', long)

        },
        (error) => {
            console.error(error.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
        }
    );
};
