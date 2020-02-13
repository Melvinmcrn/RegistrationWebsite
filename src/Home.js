import React from 'react';
import './Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='home-content'>
                <div className='home-content-top'>
                    <a href='/' className='btn-registernow'>
                        <a href='/'>
                            Register Now
                        </a>
                    </a>
                    <div className='txt-with-link'>already register? <a href='/'>login</a></div>

                </div>
            </div>
        );
    }
}

export default Home;