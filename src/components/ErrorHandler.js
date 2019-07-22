import React from 'react';
import PropTypes from 'prop-types';

const ErrorHandler = ({ error }) => {
  return error ? <p className='error'>There was a problem handling your request.</p> : '';
};
ErrorHandler.propTypes = {
  error: PropTypes.bool
};
export default ErrorHandler;
