import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Register from './Register';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar />

                <Router>
                    <Switch>

                    <Route path="/register" component={Register}>
                    </Route>

                    <Route path="/home" component={Home}>
                    </Route>
                        {/* <Register /> */}
                        {/* <Home /> */}

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Main;