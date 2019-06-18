import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { inputOptions } from './constants';

import './styles.scss';
import * as actions from './actions';

import Title from '../Title';
import InputSearch from '../InputSearch';
import InputSelect from '../InputSelect';
import Button from '../Button';
import { isValid } from '../../utils/formValidation';

function Home({ getAllPlayersAction }) {
  const [inputNumber, setInputNumber] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPosition, setInputPosition] = useState('');

  function handleMount() {
    getAllPlayersAction();
  }

  useEffect(handleMount, []);
  function handleSubmit() {
    console.log('submit');
    // const regExp = new RegExp('^(1[8-9]|2[0-9]|3[0-9]|4[0-0]\\d{0,1})$');
  }

  function onChangeName(e) {
    if (isValid(e, '^[a-zA-Z]*$')) {
      setInputName(e);
    }
  }

  function onChangeAge(e) {
    if (isValid(e, '^-?[0-9]*$')) {
      setInputNumber(e);
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Title>Home</Title>
        <form className="dashboard__container-input" onSubmit={() => handleSubmit}>
          <InputSearch
            className="dashboard__input"
            onChange={onChangeName}
            placeholder="Player name"
            type="text"
            value={inputName}
          />
          <InputSelect
            className="dashboard__input"
            onChange={setInputPosition}
            options={inputOptions}
            placeholder="Position"
            value={inputPosition}
          />
          <InputSearch
            className="dashboard__input"
            max={2}
            onChange={onChangeAge}
            placeholder="Age"
            type="text"
            value={inputNumber}
          />
          <Button>Send</Button>
        </form>
      </div>
    </div>
  );
}

Home.propTypes = {
  getAllPlayersAction: PropTypes.func.isRequired,
};

export default connect(null, actions)(Home);
