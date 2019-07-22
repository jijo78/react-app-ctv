import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ channels }) => {
  return channels ? (
    <header className='row channels__header'>
      <h1>
        <span className='channels__header-name'>{channels.toUpperCase()}</span> Channel
      </h1>
    </header>
  ) : (
    ''
  );
};
Header.propTypes = {
  channels: PropTypes.string
};
export default Header;
