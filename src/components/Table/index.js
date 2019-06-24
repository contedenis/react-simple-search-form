// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

// @ own
import './styles.scss';

function DataTable({ tableHeaders, tableCell }) {
  return (
    <Table unstackable striped className="data-table">
      <Table.Header>
        <Table.Row>
          {tableHeaders && tableHeaders.map((item, key) => (
            <Table.HeaderCell key={key}>{item}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableCell.length > 0 ? (
          tableCell.map((item, key) => (
            <Table.Row key={key}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.position}</Table.Cell>
              <Table.Cell>{item.nationality}</Table.Cell>
              <Table.Cell>{item.dateOfBirth}</Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row className="data-table__placeholder">
            <Table.Cell colSpan="4">
              Oops, it seems that we have not found players.
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

DataTable.propTypes = {
  tableCell: PropTypes.array.isRequired,
  tableHeaders: PropTypes.array.isRequired,
};

export default DataTable;
