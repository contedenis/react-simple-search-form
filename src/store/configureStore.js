import rootReducer from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

export default function configureStore(initialState = {}) {
  /* eslint-disable no-underscore-dangle, no-undef */
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  /* eslint-enable */
  const store = createStore (
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )

  return { store };
}
