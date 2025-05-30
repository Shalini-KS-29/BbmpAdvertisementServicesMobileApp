import textConstant from "../constant/textConstant";


export const getAgencyDetailsApi = async (id) => {
    return fetch(`http://192.168.0.35:8393/v1/api/bbmp/advertisement/services/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'userName': "WMRAnlRMmvugnz+AIkCupTiWfYERt/GgxV8RNxf9cys/vnOi/UvXKSI0TkoUg8/z",
            'password': "FR5wjYwJ5MUY9kyLcV5t7gbb6rAseEICK7+fPUyPnujmjbHMV/Bw9tBHA8DclKzo"
        },
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

export const getAgencyListApi = async () => {
    return fetch('http://192.168.0.35:8393/v1/api/bbmp/advertisement/services/agencies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'userName': "WMRAnlRMmvugnz+AIkCupTiWfYERt/GgxV8RNxf9cys/vnOi/UvXKSI0TkoUg8/z",
            'password': "FR5wjYwJ5MUY9kyLcV5t7gbb6rAseEICK7+fPUyPnujmjbHMV/Bw9tBHA8DclKzo"
        },

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