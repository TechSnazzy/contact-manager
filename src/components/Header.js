import React from 'react';
// impt + tab will create the line below
import PropTypes from 'prop-types';

/*
This is a functional Component.
In order to get the props,...
We pass the props in as a parameter.
Then we can call the props inside of an expression.
I have set destructuring above the return to pull
branding out of props. Then in the h1 I can
just call branding instead of props.branding
*/

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/*
Add defaultProps just in case nothing is passed in.
*/

Header.defaultProps = {
  branding: 'My App'
};

/*
Check for bugs and validation by using PropTypes.
*/

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
