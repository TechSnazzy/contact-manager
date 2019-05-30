import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

/*
To install bootstrap: npm install bootstrap
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*
Pass in the properties
to the Header and Contact components.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="johndoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Karen Smith"
            email="karensmith@gmail.com"
            phone="333-333-3333"
          />
        </div>
      </div>
    );
  }
}

export default App;
