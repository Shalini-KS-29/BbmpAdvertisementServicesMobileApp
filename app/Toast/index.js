import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can change the icon set

const toastConfig = {
  success: ({ text1, text2 }) => (
    <View style={styles.toastContainerSuccess}>
      <Icon name="check-circle" size={24} color="#067647" style={styles.icon} />
      <View style={styles.textContainer}>
        {text1 && <Text style={styles.titleSuccess}>{text1}</Text>}
        {text2 && <Text style={styles.messageSuccess}>{text2}</Text>}
      </View>
    </View>
  ),

  error: ({ text1, text2 }) => (
    <View style={styles.toastContainerError}>
      <Icon name="error-outline" size={24} color="#D92D20" style={styles.icon} />
      <View style={styles.textContainer}>
        {text1 && <Text style={styles.titleError}>{text1}</Text>}
        {text2 && <Text style={styles.messageError}>{text2}</Text>}
      </View>
    </View>
  ),

  delete: ({ text1, text2 }) => (
    <View style={styles.toastContainerError}>
      <Icon name="delete-outline" size={24} color="#D92D20" style={styles.icon} />
      <View style={styles.textContainer}>
        {text1 && <Text style={styles.titleError}>{text1}</Text>}
        {text2 && <Text style={styles.messageError}>{text2}</Text>}
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainerSuccess: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  
    backgroundColor: '#FEFEFE',
    // borderColor: '#ABEFC6',
    // borderWidth: 1,
    elevation:5,
    shadowColor: '#000',
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: '5%',
  },
  toastContainerError: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#FEFEFE',
    elevation:5,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // backgroundColor: '#FEF3F2',
    // borderColor: '#D92D20',
    // borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: '5%',
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flexShrink: 1,
  },
  titleSuccess: {
    color: '#067647',
    fontSize: 14,
    fontWeight: '600',
  },
  messageSuccess: {
    color: '#067647',
    fontSize: 12,
    marginTop: 2,
  },
  titleError: {
    color: '#D92D20',
    fontSize: 14,
    fontWeight: '600',
  },
  messageError: {
    color: '#D92D20',
    fontSize: 12,
    marginTop: 2,
  },
});

export default toastConfig;
