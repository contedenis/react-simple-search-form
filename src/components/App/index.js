import React from 'react';
import PropTypes from 'prop-types';

import Main from '../Main';

import './styles.scss';

function App({ children }) {
  return (
    <Main>
      {children}
    </Main>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
