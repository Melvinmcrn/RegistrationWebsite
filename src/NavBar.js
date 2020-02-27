import React from 'react';
import logo from './img/CU_logo.png';
import './NavBar.css';
import { FaUserCircle } from 'react-icons/fa';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedin: this.props.loggedin || false,
            isstaff: this.props.isstaff || false,
        };
    }

    login() {
        this.setState({ loggedin: true, });
    }

    logout() {
        this.setState({ loggedin: false, });
    }

    render() {
        return (

            <div className="navbar-area">
                <ul className="navbar-container">
                    <a className="left navbar-logo" href="/home">
                        <li className="left"><img src={logo} className="navbar-logo-img" alt="chula logo" /></li>
                        <li className="navbar-logo-txt">
                            <p className="big-txt">CU OPEN HOUSE</p>
                            {/* <p className="small-txt">Client</p> */}
                        </li>
                        <li className={this.state.isstaff ? '' : 'hidden'}>
                            <p className='staff-logo'>Staff</p>
                        </li>
                    </a>
                    <div></div>
                    <li className="right">
                        <div className="dropdown">
                            <a href="/home" className="navbar-txt">
                                <FaUserCircle className="navbar-icon-profile" />
                                {/* Username */}
                            </a>
                            <div className="dropdown-content">
                                <div className={this.state.loggedin ? 'hidden' : ''}>
                                    <a href="/viewevent" onClick={this.login}>Login</a>
                                    <a href="/register">Register</a>
                                </div>

                                <div className={this.state.loggedin ? '' : 'hidden'}>
                                    <a href="/">Edit Profile</a>
                                    <a href="/home" onClick={this.logout}>Logout</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="right"><a className="navbar-txt" href="/"><FaBell className="navbar-icon" />Notification</a></li>
                <li className="right"><a className="navbar-txt" href="/"><FaPlusCircle className="navbar-icon" />Create Project</a></li> */}
                </ul>
            </div>

        );
    }
}

export default NavBar;