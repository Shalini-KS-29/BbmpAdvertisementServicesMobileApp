import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InspectionHistoryContainer from '../screens/inspectionHistory/inspectionHistoryContainer.js';
import UserAccount from '../screens/userAccount/userAccountScreen.js';
import UserAccountContainer from '../screens/userAccount/userAccountContainer.js';
import { CommonActions } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const BottomTabNavigator = () => (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.blue,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'AgencyList') {
                iconName = 'home'; // home icon
            } else if (route.name === 'History') {
                iconName = 'history'; // history icon
            } else if (route.name === 'User') {
                iconName = 'person'; // account icon
            }

            return <Icon name={iconName} size={size} color={color} />;
        },
    })}>
        <Tab.Screen
            name="AgencyList"
            component={AgencyListContainer}
            options={({ navigation }) => ({
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: 'white',
                headerTitle: 'Advertisement Agency',

                headerRight: () => (
                    <TouchableOpacity

                        onPress={() => {
                            Alert.alert(
                                'Logout',
                                'Are you sure you want to logout?',
                                [
                                    { text: 'Cancel', style: 'cancel' },
                                    {
                                        text: 'Logout',
                                        style: 'destructive',
                                        // ⬇️ inside headerRight
                                        onPress: async () => {
                                            await AsyncStorage.multiRemove(['mobileNumber', 'token']);

                                            // 2️⃣  climb up to the root (Stack) navigator
                                            const root = navigation.getParent();   // Tab ➜ Stack
                                            if (root) {
                                                root.dispatch(
                                                    CommonActions.reset({
                                                        index: 0,
                                                        routes: [{ name: 'Login' }],     // 3️⃣  point to the Login screen in the root stack
                                                    })
                                                );
                                            }
                                        },
                                    },
                                ],
                                { cancelable: true }
                            );
                        }}
                        style={{ marginRight: 10 }}>
                        <Icon name="logout" size={24} color="white" />
                    </TouchableOpacity>
                ),
            })}
        />

        <Tab.Screen name="History" component={InspectionHistoryContainer}
            options={({ navigation }) => ({
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: 'white',
                headerTitle: 'History',

            })}
        />
        <Tab.Screen name="User" component={UserAccountContainer}
            options={({ navigation }) => ({
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: 'white',
                headerTitle: 'User',

            })} />

    </Tab.Navigator>
);

// Main Navigator
const Navigator = () => {
    const [initialRoute, setInitialRoute] = React.useState(null);

    React.useEffect(() => {
        const checkLogin = async () => {
            try {
                const savedMobile = await AsyncStorage.getItem('mobileNumber');
                setInitialRoute(savedMobile ? 'MainTabs' : 'Login');
            } catch (error) {
                console.error('Failed to check login:', error);
                setInitialRoute('Login');
            }
        };
        checkLogin();
    }, []);

    if (initialRoute === null) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="Login" component={LoginContainer} options={{ headerShown: false }} />
                <Stack.Screen name="Otp" component={OtpContainer} options={{ headerShown: false }} />
                <Tab.Screen
                    name="Home"
                    component={HomeContainer}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                        headerTintColor: 'white',
                        headerTitle: 'Advertisement Agency',

                    })}
                />
                <Tab.Screen
                    name="AgencyList"
                    component={AgencyListContainer}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                        headerTintColor: 'white',
                        headerTitle: 'Advertisement Agency',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
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
                                style={{ marginRight: 10 }}>
                                <Icon name="logout" size={24} color="white" />
                            </TouchableOpacity>
                        ),
                    })}
                />

                <Stack.Screen name="MainTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Navigator;


// ---------- 1. Bottom-tab navigator ----------
// const Tab = createBottomTabNavigator();

// function AppTabs() {
//   return (
//     <Tab.Navigator /* …icons & styling… */>
//       <Tab.Screen name="AgencyList" component={AgencyListContainer} />
//       <Tab.Screen name="History"     component={InspectionHistoryContainer} />
//       <Tab.Screen name="User"        component={UserAccountContainer} />
//     </Tab.Navigator>
//   );
// }

// // ---------- 2. Auth stack ----------
// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Login" component={LoginContainer} />
//     <Stack.Screen name="Otp"   component={OtpContainer}   />
//   </Stack.Navigator>
// );

// // ---------- 3. Root ----------
// export default function Navigator() {
//   const [isSignedIn, setIsSignedIn] = React.useState(false);

//   React.useEffect(() => {
//     AsyncStorage.getItem('mobileNumber').then(val => setIsSignedIn(!!val));
//   }, []);

//   return (
//     <NavigationContainer>
//       {isSignedIn ? <AppTabs /> : <AuthStack />}
//     </NavigationContainer>
//   );
// }
