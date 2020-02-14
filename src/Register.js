import React from 'react';
import './Register.css';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
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
        );
    }
}

function personalInformation() {
    return (
        <div className='form-container'>

            <div className='form-topic'>
                <h1>ข้อมูลส่วนตัว</h1>
            </div>

            <div className='form-content'>
                <label>ชื่อ</label>
                <input type='text'></input>
            </div>

            <div className='form-content'>
                <label>นามสกุล</label>
                <input type='text'></input>
            </div>

            <div className='form-content'>
                <label>ชื่อเล่น</label>
                <input type='text'></input>
            </div>

            <div className='form-content'>
                <label>วันเกิด</label>
                <input type='date   '></input>
            </div>

        </div>
    );
}

function loginInfo() {
    return (
        <div className='form-container'>

            <div className='form-topic'>
                <h1>ข้อมูลบัญชี</h1>
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
                <h1>การศึกษา</h1>
            </div>

            <div className='form-content'>
                <label>ระดับการศึกษา</label>
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