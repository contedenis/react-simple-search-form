import { get } from 'lodash';

export const getPlayers = ({ home }) => get(home, 'players');
