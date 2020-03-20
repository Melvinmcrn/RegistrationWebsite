import { combineReducers } from 'redux';

const tempReducer = (data = 'default_data', action) => {
    if (action.type === 'TEMP_ACTION') {
        return action.payload;
    }

    return data;
};

const registeredEventReducer = () => {
    return [
        { eventId: 1, name: 'Intaniverse', loc: 'Faculty of Engineering', time: '20 June 2019, 8:30PM', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 2, name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 3, name: 'Event_3', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 4, name: 'Event_4', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 5, name: 'Event_5', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 6, name: 'Event_6', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 7, name: 'Event_7', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 8, name: 'Event_8', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 9, name: 'Event_9', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 10, name: 'Event_10', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 11, name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 12, name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 13, name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
        { eventId: 14, name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
    ];
};

const selectedEventReducer = (selectedEvent = null, action) => {
    if (action.type === 'SELECT_EVENT') {
        return action.payload;
    }
    return selectedEvent;
};

export default combineReducers({
    registeredEvent: registeredEventReducer,
    selectedEvent: selectedEventReducer,
    tempReducer
});