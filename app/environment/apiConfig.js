// apiConfig.js

const env = {
    test: {
        // BASE_URL: 'http://192.168.0.65:8099',
        BASE_URL: 'http://192.168.0.35:8393'
    },
    prod: {
        BASE_URL: 'add prod base url here',
    },
};

// Change this to 'prod' when building for production
const currentEnv = 'test';

export default env[currentEnv];
