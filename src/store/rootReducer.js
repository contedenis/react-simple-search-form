import { combineReducers } from 'redux';
import home from '../components/Home/reducer';

const appReducer = combineReducers({
  home,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
