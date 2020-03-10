import React from 'react';
import './Footer.css';
import logo from './img/CU_logo.png';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            isStaff: false,
        };
    }

    render() {
        return (
            <footer className="footer-area">
                <div className='footer-bottom-text'>
                    <p>Copyright © 2020 Melvin Macaranas. All Rights Reserved.</p>
                </div>
            </footer>

        );
    }
}

export default Footer;