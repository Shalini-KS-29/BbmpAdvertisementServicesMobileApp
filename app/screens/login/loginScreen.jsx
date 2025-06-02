import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './loginStyle';
import CustomButton from '../../components/customButton/customButton';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { FontSize } from '../../constant/fontSize';
import colors from '../../constant/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';



const imageData = [
    {
        img: require('../../assets/Images/Minister.png'),
        label: 'Sri Siddaramaiah',
        subLabel: 'Hon`ble CM',
    },
    {
        img: require('../../assets/Images/Logo-k.png'),
        label: 'Governement of',
        subLabel: 'Karnataka',
    },
    { img: require('../../assets/Images/BBMP_LOGO.png'), label: 'BBMP' },
    {
        img: require('../../assets/Images/DeputyCm.jpg'),
        label: 'Sri D.K Shivakumar',
        subLabel: 'Hon’ble Deputy CM ',
    },
];

const LoginScreen = (props) => {
    const { loginApi, loginResponse, verifyOtpApi, verifyOtpResponse } = props
    const [mobileNo, setMobileNo] = useState(null);
    const [otp, setOtp] = useState(null);
    const [mobileNoError, setMobileNoError] = useState('');
    const [otperror, setOtperror] = useState('');

    const navigation = useNavigation()
    const [show, setShow] = useState(false)


    const Image_RenderItem = ({ item }) => {
        return (
            <View style={styles.ImageAndDesignation}>
                <View style={styles.EachImage}>
                    <Image source={item.img} style={styles.ImageStyle} />
                </View>
                <Text style={{ marginTop: 5, fontSize: FontSize.H6, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                    {item.label}
                </Text>
                <Text
                    style={{
                        marginTop: 2,
                        fontSize: FontSize.H7,
                        textAlign: 'center',
                        color: colors.white,
                    }}>
                    {item.subLabel}
                </Text>
            </View>
        );
    };

    useEffect(() => {
        if (loginResponse?.status === true) {
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: loginResponse?.statusMsg,
                position: 'top',
                topOffset: 60,
                autoHide: true,
            });
        } else if (loginResponse?.status === false) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: loginResponse?.statusMsg,
                position: 'top',
                topOffset: 60,
                autoHide: true,
            });
        }
    }, [loginResponse]);

    useEffect(() => {

        if (verifyOtpResponse?.status === true) {
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: verifyOtpResponse?.statusMsg,
                position: 'top',
                topOffset: 60,
                autoHide: true,
            });
            AsyncStorage.setItem('mobileNumber', mobileNo)


            // navigation.navigate('AgencyList');
            navigation.navigate('MainTabs', { screen: 'AgencyList' });


        } else if (verifyOtpResponse?.status === false) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: verifyOtpResponse?.statusMsg,
                position: 'top',
                topOffset: 60,
                autoHide: true,
            });
        }


    }, [verifyOtpResponse]);

    // Validate Mobile Number
    const validateMobileNo = () => {
        const mobileNoRegex = /^[6-9][0-9]{9}$/;
        if (!mobileNoRegex.test(mobileNo)) {
            setMobileNoError('Please enter a valid mobile number');
            return false;
        }
        if (mobileNo === '0000000000') {
            setMobileNoError('Please enter a valid mobile number');
            return false;
        }
        setMobileNoError('');
        setShow(true)
        return true;
    };


    const handleOtp = () => {
    }

    const handleSendOtp = () => {
        const isValid = validateMobileNo(); // Validate mobile number
        if (isValid) {
        }
        return isValid
    };
    const handleMobileNo = () => {
        // setShow(true)

        const result = handleSendOtp();
        if (result) {
            loginApi(mobileNo); // this triggers the API and response will be handled in useEffect
        }
    };

    const handleOtpChange = (text) => {
        setOtp(text);
        if (text?.length === 6) setOtperror('');
    };

    const handleLogin = () => {
        let valid = true;

        if (otp?.length !== 6) {
            setOtperror('Please enter a valid 6-digit OTP');
            valid = false;
        } else {
            setOtperror('');
        }

        if (valid) {
            verifyOtpApi(otp, mobileNo); // this will trigger the API
        }
    };
    const image = { uri: 'https://bbmp.gov.in/assets/img/Banner.png' };
    return (
        <View
            style={{
                flex: 1
            }}>

            <ImageBackground
                source={image}
                resizeMode="cover"
                style={{ flex: 1, }}
            >      <View style={styles.ProfileImages}>
                    <FlatList
                        data={imageData}
                        horizontal
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={Image_RenderItem}
                        contentContainerStyle={styles.LoginHeader}
                        scrollEnabled={false}
                    />
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Adjust layout on iOS
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
                    style={{ flex: 1, }}>
                    <ScrollView >
                        <Text style={styles.textStyle}>
                            BBMP ADVERTISEMENT SERVICES
                        </Text>

                        <TextInput

                            style={styles.textInputforMobileno}
                            placeholder='ENTER MOBILE NUMBER'
                            placeholderTextColor={colors.white}
                            value={mobileNo}
                            onChangeText={setMobileNo}
                            keyboardType="numeric"
                            error={!!mobileNoError}
                            errorMessage={mobileNoError}
                            maxLength={10}
                        />
                        {mobileNoError && !!mobileNoError && (
                            <Text style={styles.textError}>{mobileNoError}</Text>
                        )}

                        {!show &&

                            <CustomButton
                                style={styles.button}
                                width={370}
                                title="LOGIN"
                                onPress={handleMobileNo}
                            />

                        }
                        {show && <View
                            style={{
                                justifyContent: 'flex-end',
                            }}>

                            <TextInput

                                style={styles.textInputforOtp}
                                placeholder='ENTER OTP'
                                placeholderTextColor={colors.white}
                                value={otp}
                                onChangeText={handleOtpChange}
                                keyboardType="numeric"
                                error={!!otperror}
                                errorMessage={otperror}
                                maxLength={6}
                            />
                            {otperror && !!otperror && (
                                <Text style={styles.textError}>{otperror}</Text>
                            )}

                            <CustomButton
                                style={styles.button}
                                width={370}
                                title="VERIFY OTP"
                                onPress={handleLogin}
                            />
                        </View>}
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
};
export default LoginScreen;