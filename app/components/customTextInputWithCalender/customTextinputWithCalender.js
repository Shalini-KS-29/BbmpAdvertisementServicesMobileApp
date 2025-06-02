import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';


const CustomTextInputwithDatePicker = ({
  label,
  value,
  onChangeText,
  error = false,
  errorMessage = '',
  keyboardType = 'default',
  secureTextEntry = false,
  style,
  maxLength,
  onPress,
  ...rest
}) => {
  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <TextInput
          label={label}
          value={value}
          onChangeText={onChangeText}
          mode="outlined"
          error={error}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={style}
          right={<TextInput.Icon icon="calendar" onPress={onPress} />}
          maxLength={maxLength}
          {...rest}
        />
      </TouchableOpacity>
      {error && !!errorMessage && (
        <Text style={{ color: 'red', marginTop: 4, fontSize: 12, alignSelf: 'center' }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInputwithDatePicker;
