import React from 'react';
import './Register.css';
import Navbar from './NavBar';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className='register-container'>

                    <form className='register-form'>

                        {loginInfo()}
                        {personalInformation()}
                        {education()}

                        <div className='submit-btn-group'>
                            <input type='submit'></input>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

function personalInformation() {
    return (
        <div className='form-container'>

            <div className='form-topic'>
                <h1>Personal Information</h1>
            </div>

            <div className='form-row'>
                <div className='form-content'>
                    <label>First name</label>
                    <input type='text' placeholder='Melvin'></input>
                </div>

                <div className='form-content'>
                    <label>Last name</label>
                    <input type='text' placeholder='Macaranas'></input>
                </div>
            </div>


            <div className='form-row'>
                <div className='form-content'>
                    <label>Nickname</label>
                    <input type='text' placeholder='Mel'></input>
                </div>

                <div className='form-content'>
                    <label>Birthday</label>
                    <input type='date' ></input>
                </div>
            </div>

        </div>
    );
}

function loginInfo() {
    return (
        <div className='form-container'>

            <div className='form-topic'>
                <h1>Account Information</h1>
            </div>

            <div className='form-content'>
                <label>Username</label>
                <input type='text'></input>
            </div>

            <div className='form-content'>
                <label>Email</label>
                <input type='email'></input>
            </div>

            <div className='form-content'>
                <label>Password</label>
                <input type='password'></input>
            </div>

        </div>
    );
}

function education() {
    return (
        <div className='form-container'>

            <div className='form-topic'>
                <h1>Education</h1>
            </div>

            <div className='form-content'>
                <label>Education Level</label>
                <input type='text'></input>
            </div>

            <div className='form-content'>
                <label>สถานศึกษา</label>
                <input type='text'></input>
            </div>

        </div>
    );
}

export default Register;