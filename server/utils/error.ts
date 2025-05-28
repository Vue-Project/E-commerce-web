export const handleError = (error: any) => {
    const generalMassage = 'An unexpected error occurred';
    let statusCode = 500;
    let statusMessage = 'Internal Server Error';
    let message = generalMassage;
    let data = undefined;
    if (error.response) {
        // Axios error response
        statusCode = error.response.status || 500;
        statusMessage = error.response.statusText || 'Error';

        if (error.response._data) {
            data = error.response._data && error.response._data.errors ? error.response._data.errors : undefined;
            message = error.response._data.message ? error.response._data.message : generalMassage;
        }
    }
    return {
        statusCode,
        statusMessage,
        message,
        data,
    };
};
