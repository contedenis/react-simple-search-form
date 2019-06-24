// @ packages
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// @ app
import { isValid } from '../../utils/formValidation';
import DataTable from '../Table';
import InputSearch from '../InputSearch';
import InputSelect from '../InputSelect';
import SendButton from '../SendButton';
import Title from '../Title';

// @ own
import './styles.scss';
import { getPlayers } from './selectors';
import { inputOptions } from './constants';
import * as actions from './actions';

function Home({ getAllPlayersAction, players }) {
  const [inputNumber, setInputNumber] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPosition, setInputPosition] = useState('');
  const [dataTable, setDataTable] = useState([]);

  function handleMount() {
    getAllPlayersAction();
  }

  function handleUpdate() {
    setDataTable(players);
  }

  useEffect(handleMount, []);
  useEffect(handleUpdate, [players]);

  function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    return (
      array.filter(item => (
        filterKeys.every((key) => {
          if (!filters[key].length) {
            return true;
          }
          if (key === 'dateOfBirth') {
            return moment().diff(item[key], 'years') === Number(filters[key]);
          }
          return filters[key].includes(item[key])
            || item[key].toLowerCase().startsWith(filters[key].toLowerCase());
        })))
    );
  }

  function handleSubmit() {
    const filters = {
      name: inputName,
      position: inputPosition,
      dateOfBirth: inputNumber,
    };
    const filteredPlayers = multiFilter(players, filters);
    setDataTable(filteredPlayers);
  }

  function onChangeName(e) {
    if (isValid(e, '^[a-z A-Z]*$')) {
      setInputName(e);
    }
  }

  function onChangeAge(e) {
    if (isValid(e, '^-?[0-9]*$')) {
      setInputNumber(e);
    }
  }

  function onChangeSelect(e, data) {
    e.preventDefault();
    setInputPosition(data.value);
  }

  function onDelete(value) {
    if (value === 'name') {
      setInputName('');
    } else {
      setInputNumber('');
    }
  }

  const TABLE_HEADERS = [
    'Player',
    'Position',
    'Nationality',
    'Age',
  ];

  const TABLE_CELL = dataTable.map(player => ({
    ...player,
    dateOfBirth: moment().diff(player.dateOfBirth, 'years'),
  }));

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Title>Football Player Finder</Title>
        <div className="dashboard__container-input">
          <InputSearch
            className="dashboard__input"
            name="name"
            onChange={onChangeName}
            onDelete={onDelete}
            placeholder="Player name"
            type="text"
            value={inputName}
          />
          <InputSelect
            className="dashboard__input"
            onChange={onChangeSelect}
            options={inputOptions}
            placeholder="Position"
            value={inputPosition}
          />
          <InputSearch
            className="dashboard__input"
            max={2}
            name="age"
            onChange={onChangeAge}
            onDelete={onDelete}
            placeholder="Age"
            type="text"
            value={inputNumber}
          />
          <SendButton onClick={handleSubmit}>Send</SendButton>
        </div>
        <DataTable tableHeaders={TABLE_HEADERS} tableCell={TABLE_CELL} />
      </div>
    </div>
  );
}

Home.defaultProps = {
  players: [],
};

Home.propTypes = {
  getAllPlayersAction: PropTypes.func.isRequired,
  players: PropTypes.array,
};

const mapStateToProps = state => ({
  players: getPlayers(state),
});


export default connect(mapStateToProps, actions)(Home);
