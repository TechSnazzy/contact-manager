import React, { Component } from 'react';

/*
Step 4: Import the Contact component.
*/

import Contact from './Contact';

class Contacts extends Component {
  /*
  The longer way to create this is like this...

  constructer() {
    super();
    this.state = {
      contacts: [...]
    }
  }

  But I shortened it to this...

  state = {
    contacts: [...]
  }
  */

  state = {
    /*
      Step 1:
      We have state that holds a key of contacts
      and the value is an array of objects.
      */
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karenwilliams@gmail.com',
        phone: '333-333-3333'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henryjohnson@gmail.com',
        phone: '111-111-1111'
      }
    ]
  };

  render() {
    /*
    Step 2: Pulling the contacts out of the state
    and looping through them with map().
    */

    /*
    Step 5: Then we add the Contact component and it
    takes in some properties of name, email and phone
    so we add that as well.
    Also add the unique key to not get the warning.
    */
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            // name={contact.name}
            // email={contact.email}
            // phone={contact.phone}
            contact={contact}
            /*
            But instead of passing in each individual contact
            I can just pass in the contact.
            */
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
