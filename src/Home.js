import React from 'react';
import NavBar from './NavBar';

class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <NavBar />
                <p>Home</p>
            </div>
        );
    }
}

export default Home;