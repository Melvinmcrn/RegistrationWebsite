import React from 'react';
import './ViewEventClient.css';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

class ViewEventClient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            currentModal: null,
            eventList: [{ eventId: 1 },
            { eventId: 2 },
            { eventId: 3 },
            { eventId: 4 },
            { eventId: 5 },
            { eventId: 6 },
            { eventId: 7 },
            { eventId: 8 },
            { eventId: 9 },
            { eventId: 10 },
            { eventId: 11 },
            { eventId: 12 },
            { eventId: 13 },
            { eventId: 14 }],
            eventData: {
                eventId_1: { name: 'Intaniverse', loc: 'Faculty of Engineering', time: '20 June 2019, 8:30PM', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_2: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_3: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_4: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_5: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_6: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_7: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_8: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_9: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_10: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_11: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_12: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_13: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
                eventId_14: { name: 'Event_2', loc: 'loc_2', time: 'time_2', detail: 'klsdmvklsdmvlsdkmvlskdvmlskmvdsldkvmsldkvm' },
            }
        }

        this.showHideModal = this.showHideModal.bind(this);
    }

    render() {
        return (
            <div className='vieweventclient-page'>

                {this.getEventModal()}

                <div className='page-topic'>
                    My Event
                </div>

                <div className='event-container'>
                    {this.getEventCard()}
                </div>

            </div>
        );
    }

    getEventCard() {
        return this.state.eventList.map((item) => {
            let eventData = this.state.eventData['eventId_' + item.eventId];
            return (
                <div key={'eventId_' + item.eventId} name='hell' className='event-card clickable' onClick={() => this.showHideModal('eventId_' + item.eventId)}>
                    <div className='event-name'>
                        {eventData.name}
                    </div>
                    <div className='event-detail'>
                        <h2><MdLocationOn className='icon' />{eventData.loc}</h2>
                        <h2><MdAccessTime className='icon' />{eventData.time}</h2>
                    </div>

                </div>
            );
        });
    }

    getEventModal() {
        let eventId = this.state.currentModal;
        let eventData = this.state.eventData[eventId];
        return !eventData ? '' : (
            <div className={'modal-container ' + (this.state.showModal ? 'show-modal' : '')}>
                <div className='event-modal'>
                    <div className='modal-header'>
                        <div className='left'>
                            <div className='event-name'>
                                {eventData['name']}
                            </div>
                        </div>
                        <div className='right'>
                            <IoMdClose className='icon clickable' onClick={() => this.showHideModal(null)} />
                        </div>
                    </div>
                    <div className='event-detail'>
                        <h2><MdLocationOn className='icon' />{eventData['loc']}</h2>
                        <h2><MdAccessTime className='icon' />{eventData['time']}</h2>
                        <h2>{eventData['detail']}</h2>
                    </div>
                </div>
            </div>
        );
    }

    showHideModal(eventId) {
        
        if(!this.state.showModal && eventId) {
            this.setState({
                currentModal: eventId,
            });
        }

        this.setState({
            showModal: !this.state.showModal,
        });
    }
}

export default ViewEventClient;