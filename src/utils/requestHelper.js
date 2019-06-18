import axios from 'axios';

const FOOBALL_PLAYERS_API = {
  url: 'https://football-players-b31f2.firebaseio.com/',
};

const footballPlayersApi = () => {
  const instance = axios.create({
    baseURL: FOOBALL_PLAYERS_API.url,
  });
  return instance;
};

const footballPlayersApiInstance = footballPlayersApi();

export {
  footballPlayersApiInstance,
};
