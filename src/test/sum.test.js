// Link.react.test.js
/* eslint-disable */
import React from 'react';
import Enzime, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import Title from '../components/Title';
import Table from '../components/Table';
import InputSearch from '../components/InputSearch';
import { isValid } from '../utils/formValidation';

Enzime.configure({ adapter: new Adapter() });

describe('<InputSearch />', () => {
  test('change value correctly', () => {
    let name = 'J';

    function onChangeName(e) {
      if (isValid(e, '^[a-z A-Z]*$')) {
        name = e;
      }
    }

    function onDelete(value) {
      if (value === 'name') {
        name = '';
      }
    }

    const wrapper = mount(
      <InputSearch
        onChange={onChangeName}
        onDelete={onDelete}
        type="text"
      />,
    );

    wrapper.setProps({ name: 'name', value: name });

    const value = wrapper.find('input').props().value;
    expect(value).toEqual('J');
    expect(wrapper).toMatchSnapshot();
  });

  test('calls the onChange function', () => {
    let value = '';
    function onChangeName(e) {
      if (isValid(e, '^[a-z A-Z]*$')) {
        value = e;
      }
    }
    const wrapper = mount(
      <InputSearch
        type="text"
        onChange={onChangeName}
      />,
    );

    wrapper.find('input').simulate('change', {
      target: { value: 'D' }
    });
    wrapper.update();
    wrapper.setProps({ value: value });
    const value1 = wrapper.find('input').props().value;
    expect(value1).not.toBe('J');
    expect(wrapper).toMatchSnapshot();
  });

  test('calls the onDelete function', () => {
    let value = 'name';
    function onDelete(valueProps) {
      if (valueProps === 'name') {
        value = '';
      }
    }
    const wrapper = mount(
      <InputSearch
        type="text"
        onDelete={onDelete}
        name="name"
        value="name"
      />,
    );

    const inputValue = wrapper.find('input').props().value;
    expect(inputValue).toBe('name');
    expect(wrapper).toMatchSnapshot();

    const iconProps = wrapper.find('i');
    iconProps.simulate('click');
    wrapper.update();
    wrapper.setProps({ value: value });

    const inputValueUpdated = wrapper.find('input').props().value;
    expect(inputValueUpdated).not.toBe('name');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Title />', () => {
  test('render children', () => {
    const wrapper = mount(
      <Title>Hello world!</Title>,
    );
    
    const children = wrapper.find('h3').props().children;
    expect(children).toBe('Hello world!');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Table />', () => {
  test('rendering of header values', () => {
    const TABLE_HEADERS = [
      'Player',
      'Position',
      'Nationality',
      'Age',
    ];

    const wrapper = mount(
      <Table tableHeaders={TABLE_HEADERS} tableCell={[]} />,
    );

    const listOfth = wrapper.find('th').getElements();
    expect(listOfth[0].props.children).toBe("Player");
    expect(listOfth[1].props.children).toBe("Position");
    expect(listOfth[2].props.children).toBe("Nationality");
    expect(listOfth[3].props.children).toBe("Age");
    expect(wrapper).toMatchSnapshot();
  });

  test('rendering of cell values', () => {
    const TABLE_CELLS = [
      {
        name: 'Romelu Lukaku',
        position: 'Centre-Forward',
        nationality: 'Belgium',
        dateOfBirth: '1993-05-13'
      },
    ];

    const wrapper = mount(
      <Table tableHeaders={[]} tableCell={TABLE_CELLS} />,
    );

    const listOfTr = wrapper.find('tr').getElements();
    const listOfTd = listOfTr[1].props.children.map(node => node.props.children);
    expect(listOfTd).toStrictEqual(['Romelu Lukaku', 'Centre-Forward', 'Belgium', '1993-05-13']);
    expect(wrapper).toMatchSnapshot();
  });

  test('rendering of empty values', () => {
    const wrapper = mount(
      <Table tableHeaders={[]} tableCell={[]} />,
    );

    const listOfTd = wrapper.find('td').getElements();
    expect(listOfTd[0].props.children).toBe("Oops, it seems that we have not found players.");
    expect(wrapper).toMatchSnapshot();

    const listOfTr = wrapper.find('tr').getElements();
    expect(listOfTr[1].props.className).toBe('data-table__placeholder');
    expect(wrapper).toMatchSnapshot();
  });
});