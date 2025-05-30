import React, { useEffect, useState } from 'react';
import { Button, View, Image, Alert, Platform, Text, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform as RNPlatform } from 'react-native';
import CustomButton from '../../components/customButton/customButton';
import styles from '../uploadImage/captureOrUploadImageStyle';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constant/colors';


const CaptureOrUploadImage = (props) => {
    const { handleImage } = props;

    const navigation = useNavigation();

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        if (photo) {
            handleImage(photo)
        }
    }, [photo])


    const handleImageOption = () => {
        Alert.alert(
            'Select Image Source',
            'Choose how you want to add the image',
            [
                {
                    text: 'Capture Photo',
                    onPress: handleTakePhoto,
                },
                {
                    text: 'Upload from Library',
                    onPress: handleChooseFromLibrary,
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };


    const requestPermission = async (type) => {
        let permission;

        if (type === 'camera') {
            permission =
                Platform.OS === 'android'
                    ? PERMISSIONS.ANDROID.CAMERA
                    : PERMISSIONS.IOS.CAMERA;
        } else if (type === 'photo') {
            if (Platform.OS === 'android') {
                const androidVersion = RNPlatform.constants?.Release || '12';

                if (parseInt(androidVersion, 10) >= 13) {
                    permission = PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
                } else {
                    permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
                }
            } else if (Platform.OS === 'ios') {
                const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
                return result === RESULTS.GRANTED;
            } else {
                const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
                return result === RESULTS.GRANTED;
            }
        } else if (type === 'write') {
            // Only needed for Android 12 and below
            permission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
        }

        const result = await check(permission);

        if (result === RESULTS.GRANTED) {
            return true;
        }

        if (result === RESULTS.BLOCKED) {
            Alert.alert(
                'Permission Required',
                'You have previously denied this permission. Please enable it from settings.',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Open Settings', onPress: () => openSettings() },
                ]
            );
            return false;
        }

        const requestResult = await request(permission);
        return requestResult === RESULTS.GRANTED;
    };


    const handleTakePhoto = async () => {
        const granted = await requestPermission('camera');
        if (granted) {
            launchCamera({ mediaType: 'photo' }, (response) => {
                if (response.assets && !response.didCancel) {
                    setPhoto(response.assets[0]);
                }
            });
        } else {
            Alert.alert('Permission Denied', 'Camera access is required to take photos.');
        }
    };


    const handleChooseFromLibrary = async () => {
        const granted = await requestPermission('photo');
        if (granted) {
            launchImageLibrary({ mediaType: 'photo' }, (response) => {
                if (response.assets && !response.didCancel) {
                    setPhoto(response.assets[0]);
                }
            });
        } else {
            Alert.alert('Permission Denied', 'Photo library access is required to upload images.');
        }
    };

    const handleSave = () => {
        Toast.show({
            type: 'success',

            text1: 'Image Saved',
            text2: 'Image has been saved successfully',
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
        });
        navigation.navigate('AuthenticateName')
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.titleStyle}>Property Front Elevation Photo</Text>
            <Text style={styles.textStyle}>Upload photo of front elevation of property (in case of Multi-Storey Flats - Upload photo of tower)</Text> */}

            {/* <View style={styles.imageButton}>
                <CustomButton width={'40%'} title="Click Photo" onPress={handleTakePhoto} />
                <CustomButton title="Choose from Library" onPress={handleChooseFromLibrary} />

            </View> */}




            {photo ? (
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: photo.uri }}
                        style={styles.imageStyle}
                    />

                </View>
            ) : <TouchableOpacity onPress={handleImageOption} activeOpacity={0.8}>
                <View style={styles.overlay}>
                    <Icon name="camera" size={40} color={colors.primary} />
                    <Text style={styles.text}>Tap to Upload or Capture Image</Text>
                </View>
            </TouchableOpacity>}




        </View>
    );
};

export default CaptureOrUploadImage;
