import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../screens/login/loginStyle'

const options = ['Option 1', 'Option 2', 'Option 3'];

const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <View style={styles.radioContainer}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.radioContainer}
                    onPress={() => setSelectedOption(option)}
                >
                    <View style={styles.outerCircle}>
                        {selectedOption === option && <View style={styles.innerCircle} />}
                    </View>
                    <Text style={styles.label}>{option}</Text>
                </TouchableOpacity>
            ))}
            <Text style={styles.selected}>Selected: {selectedOption}</Text>
        </View>
    );
};



export default RadioButton;
