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
    <div>
      <h1>{branding}</h1>
    </div>
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
