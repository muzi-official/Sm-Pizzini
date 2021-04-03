import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Menu from './components/menu/Menu';
import Item from './components/item/Item';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Report from './components/report/Report';
import Error from './components/404/Error';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/Home" component={Home}>
                    <Home />
                </Route>
                <Route exact path="/Login" component={Login}>
                    <Login />
                </Route>

                <Route exact path="/Item" component={Item}>
                    <Item />
                </Route>
                <Route exact path="/Menu" component={Menu}>
                    <Menu/>
                </Route>
                <Route exact path="/Signup" component={Signup}>
                    <Signup />
                </Route>

                <Route exact path="/Contact" component={Contact}>
                    <Contact />
                </Route>
                <Route exact path="/Shop" component={Shop}>
                    <Shop />
                </Route>
                <Route exact path="/About" component={About}>
                    <About />
                </Route>
                <Route exact path="/Report" component={Report}>
                    <Report />
                </Route>

                <Route component={Error} />

            </Switch>
        </Router>
    );
}

export default App;
