import {
  GET_ALL_PLAYERS,
  GET_ALL_PLAYERS_FAIL,
  GET_ALL_PLAYERS_SUCCESS,
} from './actionTypes';

const defaultState = {
  players: [],
  errorMessage: null,
  fetching: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        fetching: true,
      };
    case GET_ALL_PLAYERS_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_ALL_PLAYERS_SUCCESS:
      return {
        ...state,
        players: payload,
        fetching: false,
      };
    default:
      return state;
  }
};
