import React from 'react';
import './Register.css';
// import Navbar from './NavBar';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {},
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    render() {
        return (

            <div className='register-container'>

                <form className='register-form'>

                    {this.loginInfo()}
                    {this.personalInformation()}
                    {this.education()}

                    <div className='submit-btn-group'>
                        <input type='submit'></input>
                    </div>

                </form>
            </div>
        );
    }

    handleTextChange(e) {
        let tempData = this.state.userData;
        tempData[e.target.name] = e.target.value;
        this.setState({
            userData: tempData,
        });
    }

    getInput(type, name, placeholder) {
        return (
            <input type={type} placeholder={placeholder} name={name} value={this.state.userData[name]} onChange={this.handleTextChange}></input>
        );
    }

    personalInformation() {
        return (
            <div className='form-container'>

                <div className='form-topic'>
                    <h1>Personal Information</h1>
                </div>

                <div className='form-row'>
                    <div className='form-content'>
                        <label>First name</label>
                        {this.getInput('text', 'fname', 'Wattana')}
                    </div>

                    <div className='form-content'>
                        <label>Last name</label>
                        {this.getInput('text', 'lname', 'Singhapanich')}
                    </div>
                </div>


                <div className='form-row'>
                    <div className='form-content'>
                        <label>Nickname</label>
                        {this.getInput('text', 'nickname', 'Wee')}
                    </div>

                    <div className='form-content'>
                        <label>Birthday</label>
                        {this.getInput('date', 'birthday', '')}
                    </div>
                </div>

            </div>
        );
    }

    loginInfo() {
        return (
            <div className='form-container'>

                <div className='form-topic'>
                    <h1>Account Information</h1>
                </div>

                <div className='form-content'>
                    <label>Email</label>
                    {this.getInput('email', 'email', 'Wee1234@gmail.com')}
                </div>

                <div className='form-row'>
                    <div className='form-content'>
                        <label>Username</label>
                        {this.getInput('text', 'username', 'Wee1234')}
                    </div>

                    <div className='form-content'>
                        <label>Password</label>
                        {this.getInput('password', 'password', '12345678')}
                    </div>
                </div>



            </div>
        );
    }

    education() {
        return (
            <div className='form-container'>

                <div className='form-topic'>
                    <h1>Education</h1>
                </div>

                <div className='form-content'>
                    <label>Education Level</label>
                    {this.getInput('text', 'edulevel', 'High School')}
                </div>

                <div className='form-content'>
                    <label>School/University</label>
                    {this.getInput('text', 'schoolname', 'Triam Udom Suksa School')}
                </div>

            </div>
        );
    }
}

export default Register;