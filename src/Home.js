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
            <div className='home-content'>
                <div className='home-content-top'>
                    <div className='card-container'>
                        <div className='card'>
                            <p>Lorem ipsum dolor sit amet, turpis aliquam tellus, vel odio at sit. Urna nulla sit massa magnis. Dis diam nulla, lacus quis ligula nulla, condimentum curabitur lacus, sit leo varius nunc tortor. Scelerisque dolores, nam lorem urna nunc mattis turpis justo, eget hymenaeos mauris wisi taciti tristique, euismod est. Id et natoque molestie aliquam donec dapibus, nec aliquam hendrerit pellentesque nunc, per volutpat risus proin ultrices magna conubia. Cras litora lectus orci justo magna a, sed rhoncus mollis.</p>
                            <a href='/register' className='btn-registernow'>
                                <a href='/register'>
                                    Register
                        </a>
                            </a>
                            <div className='txt-with-link'>already register? <a href='/viewevent'>login</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;