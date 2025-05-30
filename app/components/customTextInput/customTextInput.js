import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './customTextinputStyle';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  error = false,
  errorMessage = '',
  keyboardType = 'default',
  secureTextEntry = false,
  style,
  maxLength,
  iconSize,
  mode,
  placeholderTextColor,
  iconName = '', // <-- optional icon name
  iconPosition = 'right', // 'left' or 'right'
  onIconPress = () => { }, // handler for icon tap
  ...rest
}) => {
  const renderIcon = () => {
    if (!iconName) return null;
    return (
      <TextInput.Icon
        icon={iconName}
        onPress={onIconPress}
        forceTextInputFocus={false}
        size={iconSize}
      />
    );
  };
  return (
    <View style={styles.textContainer}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode={mode ? mode : 'outlined'}
        error={error}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={style}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        returnKeyType="done"
        {...(iconPosition === 'right'
          ? { right: renderIcon() }
          : { left: renderIcon() })}

        {...rest}
      />


      {error && !!errorMessage && (
        <Text style={styles.textError}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
