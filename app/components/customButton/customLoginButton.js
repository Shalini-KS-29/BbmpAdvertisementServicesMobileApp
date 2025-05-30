import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../constant/colors';
import styles from './customButtonStyle';
import { Button, Text } from 'react-native-paper';

const CustomLoginButton = ({
    onMobileSubmit,
    onOtpVerify,
    mobilePlaceholder = "Enter mobile number",
    otpPlaceholder = "Enter OTP",
    maxMobileLength = 10,
    maxOtpLength = 6,
    inputStyle,
    otpInputStyle,
    buttonColor = 'white',
    containerStyle
}) => {

    const [mobileNo, setMobileNo] = useState('');
    const [otp, setOtp] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showOtp, setShowOtp] = useState(false);




    const loaderRotate = useRef(new Animated.Value(0)).current;
    const mobileTranslateX = useRef(new Animated.Value(0)).current;
    const otpTranslateX = useRef(new Animated.Value(400)).current;

    const startLoaderAnimation = () => {
        Animated.loop(
            Animated.timing(loaderRotate, {
                toValue: 1,
                duration: 800,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    };

    const handleSubmitMobile = () => {
        setIsSubmitting(true);
        startLoaderAnimation();

        setTimeout(() => {
            Animated.parallel([
                Animated.timing(mobileTranslateX, {
                    toValue: -400,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(otpTranslateX, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                setIsSubmitting(false);
                setShowOtp(true);
            });
        }, 1500);
    };
    const handleVerifyOtp = () => {
        setIsSubmitting(true);
        onOtpVerify?.(otp);


    };

    const spin = loaderRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.mainContainer}>
            {!showOtp && (
                <Animated.View
                    style={[
                        styles.container,

                        {
                            transform: [{ translateX: mobileTranslateX }],
                            position: 'absolute',
                            left: 0,
                            right: 0,
                        },
                    ]}>
                    <TextInput
                        placeholder={mobilePlaceholder}
                        placeholderTextColor="white"
                        keyboardType="phone-pad"
                        style={[styles.input, inputStyle]}
                        value={mobileNo}
                        onChangeText={setMobileNo}
                        maxLength={maxMobileLength}
                        returnKeyType="done"
                    />

                    {isSubmitting ? (
                        <View style={styles.overlayWrapper}>
                            <View style={styles.transparentOverlay} />
                            <View style={styles.loaderWrapper}>
                                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                                    <Icon name="reload-circle" size={50} color={colors.white} />
                                </Animated.View>
                            </View>
                        </View>
                    ) : <TouchableOpacity onPress={handleSubmitMobile}>
                        <Icon name="arrow-forward-circle" size={50} color={colors.white} />
                    </TouchableOpacity>}

                </Animated.View>
            )}



            {showOtp && (
                <Animated.View
                    style={[
                        styles.otpContainer,
                        {
                            transform: [{ translateX: otpTranslateX }],
                            position: 'absolute',
                            left: 0,
                            right: 0,
                        },
                    ]}
                >
                    <TextInput
                        placeholder={otpPlaceholder}
                        placeholderTextColor="white"
                        keyboardType="phone-pad"
                        style={[styles.otpTextInput, otpInputStyle]}
                        value={otp}
                        onChangeText={setOtp}
                        maxLength={maxOtpLength}
                        onSubmitEditing={handleVerifyOtp}
                        returnKeyType="done"
                    />
                    <Text onPress={handleVerifyOtp
                    } style={styles.verifyOtp}>VERIFY{'\n'}OTP</Text>



                </Animated.View>
            )}
        </View>
    );
};

export default CustomLoginButton;



