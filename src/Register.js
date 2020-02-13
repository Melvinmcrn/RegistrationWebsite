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

                <div className='register-form'>


                    <div className='form-container'>
                        <div className='form-topic'>
                            <h1>ข้อมูลส่วนตัว</h1>
                        </div>
                        
                        <div className='form-content'>
                            <h3>ชื่อ</h3>
                            <input type='text'></input>
                        </div>

                        <div className='form-content'>
                            <h3>นามสกุล</h3>
                            <input type='text'></input>
                        </div>

                        <div className='form-content'>
                            <h3>ชื่อเล่น</h3>
                            <input type='text'></input>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Register;