import React from 'react';
import './ViewEventClient.css';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';

class ViewEventClient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };

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
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                    {this.getEventCard()}
                </div>
                {/* Engineering Event */}
                {/* {generateEventContainer('Chula Engineering', 'engineer-event', 'Building 3', '21-22 March 2020', 'Open', 'Register')} */}

                {/* CBS Event */}
                {/* {generateEventContainer('CBS', 'cbs-event', 'Mahit Building', '21-22 March 2020', 'Pending', 'Cancel')} */}

                {/* MDCU Event */}
                {/* {generateEventContainer('MDCU', 'mdcu-event', 'CP Building', '21-22 March 2020', 'Registered', 'Cancel')} */}

            </div>
        );
    }

    getEventCard() {
        return (
            <div className='event-card' onClick={this.showHideModal}>
                <div className='event-name'>
                    Intaniverse
                </div>
                <div className='event-detail'>
                    <h2><MdLocationOn className='icon' />Faculty of Engineering</h2>
                    <h2><MdAccessTime className='icon' />20 June 2019, 8.30PM</h2>
                </div>

            </div>
        );
    }

    getEventModal() {
        return (
            <div className={'modal-container ' + (this.state.showModal ? 'show-modal' : '')}  onClick={this.showHideModal}>
                <div className='event-modal'>
                    HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                HELLO<br />
                </div>
            </div>
        );
    }

    showHideModal() {
        this.setState({
            showModal: !this.state.showModal,
        })
    }
}

function generateEventContainer(name, classname, loc, time, eventStatus, userStatus) {
    return (
        <div className={'event-container ' + classname}>
            <div className='left'>
                <h1 className='event-name'>{name}</h1>
                <div className='event-detail'>
                    <h2><MdLocationOn className='icon' />{loc}</h2>
                    <h2><MdAccessTime className='icon' />{time}</h2>
                </div>
            </div>

            <div className='right'>
                <h2 className={'top-status ' + eventStatus}>{eventStatus}</h2>
                <div className={'bottom-btn ' + userStatus}>{userStatus}</div>
            </div>

        </div>
    )
}


export default ViewEventClient;