import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import NavBar from './NavBar';
import Home from './Home';
import Register from './Register';
import ViewEventClient from './ViewEventClient';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/* <NavBar /> */}

                <Router>
                    <Switch>

                        <Route path="/register" component={Register}>
                        </Route>

                        <Route path="/home" component={Home}>
                        </Route>

                        <Route path="/viewevent" component={ViewEventClient}>
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
