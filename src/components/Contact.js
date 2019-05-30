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

    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mp-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
