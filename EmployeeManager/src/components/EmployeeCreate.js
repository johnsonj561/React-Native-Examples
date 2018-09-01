import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  handleCreate = () => {
    const { name, phone, shift } = this.props;
    const payload = { name, phone, shift };
    this.props.employeeCreate(payload);
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.handleCreate}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

const actionCreators = {
  employeeCreate
};

export default connect(mapStateToProps, actionCreators)(EmployeeCreate);
