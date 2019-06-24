import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// import semantic css
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import routes from './routes';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const { store } = configureStore();

const MOUNT_NODE = document.getElementById('root'); // eslint-disable-line no-undef
ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  ),
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
