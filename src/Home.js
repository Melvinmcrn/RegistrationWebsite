import React from 'react';
import { connect } from 'react-redux';

import './Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            loggedin: false,
            isstaff: false,
        };
    }

    getCard() {
        return (
            <div className='card'>
                <div className='card-top'>
                    <div className='card-topic'>Chula Open House 2020</div>
                    <div className='card-body'>
                        <p>Lorem ipsum dolor sit amet, turpis aliquam tellus, vel odio at sit. Urna nulla sit massa magnis. Dis diam nulla, lacus quis ligula nulla, condimentum curabitur lacus, sit leo varius nunc tortor. Scelerisque dolores, nam lorem urna nunc mattis turpis justo, eget hymenaeos mauris wisi taciti tristique, euismod est. Id et natoque molestie aliquam donec dapibus, nec aliquam hendrerit pellentesque nunc, per volutpat risus proin ultrices magna conubia. Cras litora lectus orci justo magna a, sed rhoncus mollis.</p>
                    </div>
                </div>
                <div className='card-bottom'>
                    <a href='/register' className='btn-registernow'>
                        <a href='/register'>
                            Register
                        </a>
                    </a>
                    <div className='txt-with-link'>already register? <a href='/viewevent'>login</a></div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='home-content'>
                <div className='home-content-top'>
                    <div className='card-container'>
                        {this.getCard()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tempReducer: state.tempReducer
    };
};

export default connect(mapStateToProps)(Home);