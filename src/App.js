import React, { Component } from 'react';
/*
When I originally created this, I had imported
the Contact component. But then we created the Contacts
component instead so I commented this out. But it is
imported in Contacts now.

import Contact from './components/Contact';
*/
import Contacts from './components/Contacts';
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
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
