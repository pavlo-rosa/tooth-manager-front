const nodeEnv = process.env.NODE_ENV || 'development';

const DEFAULT_CONFIG = {
    production: {
        serverUrl: 'XXXXXXXXXXXX.compute.amazonaws.com:8080/api',
    },
    development: {
        serverUrl: 'http://localhost:3004/api',
    },
};

export default {
    // Server configuration
    serverUrl: process.env.SERVER_URL || DEFAULT_CONFIG[nodeEnv].serverUrl,

    // JWT
    requestOptions: {
        headers: {
            authorization: localStorage.getItem('token') || '', // Axios latest version breaks the token when being null and makes it an [object Object]
        },
    },
};
