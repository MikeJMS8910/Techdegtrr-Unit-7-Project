import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//import other files from the component
import './App.css';
import home from './Components/home';
import error from './Components/error';

//main app

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => { return (<Redirect  to="/Search/" />); }} />
          <Route exact path="/Search" component={home} />
          <Route path="/Search/:topic" component={home} />
          <Route component={error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;