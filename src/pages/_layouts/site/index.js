import React from 'react';
import PropTypes from 'prop-types';

export default function SiteLayout({ children }) {
  return <div className='container'>{children}</div>;
}

SiteLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
