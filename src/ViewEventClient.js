import React from 'react';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { connect } from 'react-redux';

import './ViewEventClient.css';
import { selectEvent } from './redux/action/action';

class ViewEventClient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
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

        return this.props.registeredEvent.map((item) => {
            return (
                <div key={'eventId_' + item.eventId} className='event-card clickable' onClick={() => this.showHideModal(item)}>
                    <div className='event-name'>
                        {item.name}
                    </div>
                    <div className='event-detail'>
                        <h2><MdLocationOn className='icon' />{item.loc}</h2>
                        <h2><MdAccessTime className='icon' />{item.time}</h2>
                    </div>

                </div>
            );
        });
    }

    getEventModal() {
        let item = this.props.selectedEvent;
        return !item ? '' : (
            <div className={'modal-container ' + (this.state.showModal ? 'show-modal' : '')}>
                <div className='event-modal'>
                    <div className='modal-header'>
                        <div className='left'>
                            <div className='event-name'>
                                {item.name}
                            </div>
                        </div>
                        <div className='right'>
                            <IoMdClose className='icon clickable' onClick={() => this.showHideModal(null)} />
                        </div>
                    </div>
                    <div className='event-detail'>
                        <h2><MdLocationOn className='icon' />{item.loc}</h2>
                        <h2><MdAccessTime className='icon' />{item.time}</h2>
                        <h2>{item.detail}</h2>
                    </div>
                </div>
            </div>
        );
    }

    showHideModal(event) {
        this.props.selectEvent(event);

        this.setState({
            showModal: !this.state.showModal,
        });
    }
}

const mapStateToProps = (state) => {
    return {
        registeredEvent: state.registeredEvent,
        selectedEvent: state.selectedEvent
    };
};

const mapActionToProps = {
    selectEvent
};

export default connect(mapStateToProps, mapActionToProps)(ViewEventClient);