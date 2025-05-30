import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import styles from './otpStyle';
import CustomButton from '../../components/customButton/customButton';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const [otp, setOtp] = useState(null);
    const navigation = useNavigation()

    const handleOtp = () => {
        navigation.navigate('Home')
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                // marginTop: '80%'
                // alignItems: 'center',
            }}>
            <Text style={styles.textStyle}>
                ENTER OTP
            </Text>
            <CustomTextInput


                label="Enter otp"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
                style={styles.textInputforMobileno}

                maxLength={10}
            />

            <CustomButton
                style={styles.button}
                width={370}
                title="VERIFY OTP"
                onPress={handleOtp}
            />
        </View>
    );
};
export default OtpScreen;