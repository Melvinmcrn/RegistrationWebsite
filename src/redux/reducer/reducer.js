import { combineReducers } from 'redux';

const tempReducer = (data = 'default_data', action) => {
    if (action.type === 'TEMP_ACTION') {
        return action.payload;
    }

    return data;
};

export default combineReducers({
    tempReducer
});