// src/components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './customButtonStyle'

const CustomButton = ({ title, onPress, disabled = false, loading = false, style, width, height, textStyle, color }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton, height && { height }, width ? { width } : {}, style]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}>
            {loading ? (
                <ActivityIndicator color="#fff" />
            ) : (
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;

