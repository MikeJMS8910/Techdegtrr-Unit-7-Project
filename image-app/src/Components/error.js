import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

//error page

class Error404 extends Component {

    render() {
        return (
            <div className="App">
              <h3>Error 404</h3>
              <p> I'm sorry we do not recognize that URL on this site. Please click the link below to go to the home page!</p>
              <nav className="main-nav">
                <ul>
                    <li><NavLink to='/Search'>Home!</NavLink></li>
                </ul> 
              </nav>
            </div>
        );
    }

}

export default Error404; 