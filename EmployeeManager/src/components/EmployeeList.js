import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
 }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow = (employee) => (
    <ListItem employee={employee} />
  );

  render() {
    console.log('render', this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) =>
    ({ ...val, uid }));
  return { employees };
};

const actionCreators = {
  employeesFetch
};

export default connect(mapStateToProps, actionCreators)(EmployeeList);
