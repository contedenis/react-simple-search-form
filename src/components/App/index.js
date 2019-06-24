// @ packages
import React from 'react';
import PropTypes from 'prop-types';

// @ app
import Main from '../Main';

// @ own
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
