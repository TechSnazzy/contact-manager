import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './contact.css';

/*
This is a Class Component.
So we access props by using this.props
instead of just props.whatever.
*/

class Contact extends Component {
  render() {
    // return (
    //   <div>
    //     <h4>{this.props.name}</h4>
    //     <ul>
    //       <li>Email: {this.props.email}</li>
    //       <li>{this.props.phone}</li>
    //     </ul>
    //   </div>
    // );

    /*
    Above, you could call each one by this.props.something.
    Instead, use destructuring like below.
    Start by putting the destructuring above the return.
    We want name, email and phone and want to
    pull those out of this.props and then simply
    use {name}, {email}, {phone} instead.
    */

    const { name, email, phone } = this.props;

    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
