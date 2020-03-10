import React from 'react';
import './Home.css';
// import Navbar from './NavBar';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            isstaff: false,
        };
    }

    render() {
        return (
            // <div>
            //     <Navbar loggedin={this.state.loggedin} isstaff={this.state.isstaff} />
                <div className='home-content'>
                    <div className='home-content-top'>
                        <a href='/register' className='btn-registernow'>
                            <a href='/register'>
                                Register Now
                        </a>
                        </a>
                        <div className='txt-with-link'>already register? <a href='/viewevent'>login</a></div>

                    </div>
                </div>
            // </div>
        );
    }
}

export default Home;