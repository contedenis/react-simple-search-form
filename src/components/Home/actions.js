// import axios from 'axios';

import {
  GET_ALL_PLAYERS,
  GET_ALL_PLAYERS_FAIL,
  GET_ALL_PLAYERS_SUCCESS,
} from './actionTypes';

import { footballPlayersApiInstance } from '../../utils/requestHelper';
import errorHandler from '../../utils/errorHandler';

function getAllPlayers(payload) {
  return {
    type: GET_ALL_PLAYERS,
    payload,
  };
}

function getAllPlayersFail(payload) {
  return {
    type: GET_ALL_PLAYERS_FAIL,
    payload,
  };
}

function getAllPlayersSuccess(payload) {
  return {
    type: GET_ALL_PLAYERS_SUCCESS,
    payload,
  };
}

function getAllPlayersAction() {
  return (dispatch) => {
    footballPlayersApiInstance({
      url: 'players.json',
      method: 'get',
      params: {
        print: 'pretty',
      },
    })
      .then(dispatch(getAllPlayers()))
      .then(({ data }) => dispatch(getAllPlayersSuccess(data)))
      .catch((error) => {
        dispatch(getAllPlayersFail(error));
        errorHandler(error);
      });
  };
}


// const getAllPlayersAction = () => { // eslint-disable-line
//   return (dispatch) => {
//     const url = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty';
//     axios.get(url)
//       .then(dispatch(getAllPlayers()))
//       .then(res => res)
//       .then(data => data)
//       .then(payload => dispatch(getAllPlayersSuccess(payload)))
//       .catch((error) => {
//         dispatch(getAllPlayersFail(error));
//         errorHandler(error);
//       });
//   };
// };


export {
  getAllPlayersAction,
};
