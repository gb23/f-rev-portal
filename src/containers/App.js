import React, { Component } from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom'
//???import { ConnectedRouter } from 'react-router-redux'
//import logo from '../logo.svg';
////import './App.css';
import NotFound from '../components/NotFound'
//??import { history } from '../store.js'
import Businesses from './Businesses.js';

class App extends Component {
  render() {
    console.log("App component")
    return (
      <Router>
      {/* // <ConnectedRouter history={history}> */}
      <div className="App">
      
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/businesses" />} />
          {/* <Route exact path="/compositions" render={() => <Redirect to="/compositions/:id" />} /> */}
          <Route exact path="/businesses" component={Businesses} />
                        
          <Route path="*" component={NotFound} />
        </Switch> 
      </div>
           {/* // <ConnectedRouter  */}
      </Router>
    );
  }
}

export default App;
