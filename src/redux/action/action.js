export const tempAction = data => {
    return {
        type: 'TEMP_ACTION',
        payload: data
    };
};

export const selectEvent = event => {
    return {
        type: 'SELECT_EVENT',
        payload: event
    };
};