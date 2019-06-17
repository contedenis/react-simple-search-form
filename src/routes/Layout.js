import React from 'react';
import PropTypes from 'prop-types';

import App from '../components/App';

function Layout({ children }) {
  return (
    <App>
      {children}
    </App>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
