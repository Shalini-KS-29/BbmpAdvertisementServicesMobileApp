import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from '../screens/home/homeContainer.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginContainer from '../screens/login/loginContainer';
import OtpContainer from '../screens/otp/otpContainer';
import colors from '../constant/colors';
import { FontSize } from '../constant/fontSize';
import styles from '../constant/commonStyle.js';
import AgencyListContainer from '../screens/agencyList/agencyListContainer.js';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



// import LoginContainer from '../screens/login/loginContainer';



const Stack = createNativeStackNavigator();


const Navigator = () => {
    const [initialRoute, setInitialRoute] = React.useState(null)

    React.useEffect(() => {
        const checkLogin = async () => {
            try {
                const savedMobile = await AsyncStorage.getItem('mobileNumber');
                setInitialRoute(savedMobile ? 'AgencyList' : 'Login');
            } catch (error) {
                console.error('Failed to check login:', error);
                setInitialRoute('Login');
            }
        };
        checkLogin();
    }, []);

    if (initialRoute === null) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen
                    name="Home"
                    component={HomeContainer}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                        gestureEnabled: false, // Prevent back swipe/gesture
                        // headerTitleAlign: styles.headerTitleAlign,
                        headerTitle: 'Advertisement Information',
                        headerBackTitleVisible: false,
                        headerTintColor: 'white',
                    })}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginContainer}
                    options={({ navigation }) => ({
                        headerShown: false,
                        // headerStyle: {
                        //     // backgroundColor: colors.primary,

                        // },
                        gestureEnabled: false,

                        // headerTitleStyle: { color: colors.primary, fontWeight: '800', fontSize: FontSize.H2 },
                        // // Prevent back swipe/gesture
                        // // gestureDirection: 'horizontal', // Prevent back swipe/gesture
                        // headerTitleAlign: styles.headerTitleAlign,
                        // headerTitle: 'LOGIN',
                        // headerBackTitleVisible: false,
                        // headerTintColor: colors.headerTint,
                    })}
                />

                <Stack.Screen
                    name="Otp"
                    component={OtpContainer}
                    options={({ navigation }) => ({
                        headerShown: false,
                        headerStyle: {
                            // backgroundColor: colors.primary,

                        },
                        headerTitleStyle: { color: colors.primary, fontWeight: '800', fontSize: FontSize.H2 },
                        // Prevent back swipe/gesture
                        // gestureDirection: 'horizontal', // Prevent back swipe/gesture
                        headerTitleAlign: styles.headerTitleAlign,
                        headerTitle: 'LOGIN',
                        headerBackTitleVisible: false,
                        headerTintColor: colors.headerTint,
                    })}
                />



                {/* <Stack.Screen
                    name="AgencyList"
                    component={AgencyListContainer}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                        gestureEnabled: false, // Prevent back swipe/gesture
                        // headerTitleAlign: styles.headerTitleAlign,
                        headerTitle: 'Advertisment Agency',
                        headerBackTitleVisible: false,
                        headerTintColor: 'white',
                    })}
                /> */}

                <Stack.Screen
                    name="AgencyList"
                    component={AgencyListContainer}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                        gestureEnabled: false,
                        headerTitle: 'Advertisement Agency',
                        headerBackTitleVisible: false,
                        headerTintColor: 'white',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('Logging out...');
                                    Alert.alert(
                                        'Logout',
                                        'Are you sure you want to logout?',
                                        [
                                            { text: 'Cancel', style: 'cancel' },
                                            {
                                                text: 'Logout',
                                                style: 'destructive',
                                                onPress: async () => {
                                                    await AsyncStorage.removeItem('mobileNumber');
                                                    await AsyncStorage.removeItem('token');
                                                    console.log('User token removed, resetting navigation...');
                                                    navigation.reset({
                                                        index: 0,
                                                        routes: [{ name: 'Login' }],
                                                    });
                                                },
                                            },
                                        ],
                                        { cancelable: true }
                                    );
                                }}
                                style={{ marginRight: 5 }}>
                                <Icon name="logout" size={24} color="white" />
                            </TouchableOpacity>
                        ),
                    })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;