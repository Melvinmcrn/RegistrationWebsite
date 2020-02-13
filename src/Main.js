import React from 'react';
import NavBar from './NavBar';
// import Home from './Home';
import Register from './Register';

class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <NavBar />
                <Register />
                {/* <Home /> */}
            </div>
        );
    }
}

export default Main;