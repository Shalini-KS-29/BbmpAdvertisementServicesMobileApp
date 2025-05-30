import AsyncStorage from "@react-native-async-storage/async-storage";
import { END_POINTS } from "../environment/apiEndPoints";
import BASEURL from '../environment/apiConfig';
import textConstant from "../constant/textConstant";

export const getToken = async () => {
    return fetch(BASEURL.BASE_URL + END_POINTS.TOKEN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "userName": textConstant.ENCRYPTED_USERNAME,
            "password": textConstant.ENCRYPTED_PASSWORD,
            "mobileNumber": "SotVmby1Flc/JlJvqdYKqw\u003d\u003d"
        }),
    })
        .then(async (response) => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const json = await response.json();
                // Handle JSON response
                return json;
            } else {
                const text = await response.text();
                // Handle non-JSON (plain text) response like JWT token
                return { token: text }; // wrap it manually if needed
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });

};

export const sendOtpApi = async (accessToken, mobileNo) => {
    try {
        const response = await fetch(BASEURL.BASE_URL + END_POINTS.SENDOTP, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                "userName": "WMRAnlRMmvugnz+AIkCupTiWfYERt/GgxV8RNxf9cys/vnOi/UvXKSI0TkoUg8/z",
                "password": "FR5wjYwJ5MUY9kyLcV5t7gbb6rAseEICK7+fPUyPnujmjbHMV/Bw9tBHA8DclKzo"
            },
            body: JSON.stringify(
                {
                    "mobile": mobileNo,
                    "deviceId": "1",
                    "citizen": true
                }
            ),
        });
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            return data;
        } else {
            const text = await response.text();
            return null;
        }

    } catch (error) {
        console.error('Error logging in:', error);
    }
};

export const verifyOtpApi = async (data) => {
    const { otp, mobileNo } = data
    const accessToken = await AsyncStorage.getItem('token')
    try {
        const response = await fetch(BASEURL.BASE_URL + END_POINTS.VERIFYOTP, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                "userName": "WMRAnlRMmvugnz+AIkCupTiWfYERt/GgxV8RNxf9cys/vnOi/UvXKSI0TkoUg8/z",
                "password": "FR5wjYwJ5MUY9kyLcV5t7gbb6rAseEICK7+fPUyPnujmjbHMV/Bw9tBHA8DclKzo"
            },
            body: JSON.stringify(
                {
                    "mobile": mobileNo,
                    "otp": otp,
                    "deviceId": "1"
                }
            ),
        });
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            return data;
        } else {
            const text = await response.text();
            return null;
        }

    } catch (error) {
        console.error('Error logging in:', error);
    }
};

