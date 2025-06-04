export const getInspectionHistoryApi = async () => {
    return fetch('http://192.168.0.35:8393/v1/api/bbmp/advertisement/services/inspection/completed', {
        method: 'GET'
    }).then(async (response) => {
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
    }).catch(error => {
        console.error('Error logging in:', error);
    });
};