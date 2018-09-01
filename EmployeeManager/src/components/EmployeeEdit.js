import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { text } from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  handleFireEmployee = () =>
    this.setState({ showModal: !this.state.showModal });

  handleFireAccept = () => {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  handleFireDismiss = () => { this.setState({ showModal: false }); }

  handleSave = () => {
    const { name, phone, shift } = this.props;
    const uid = this.props.employee.uid;
    this.props.employeeSave({ name, phone, shift, uid });
  }

  handleTextSchedule = () => {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        {/* Employee Input Fields */}
        <EmployeeForm />

        {/* Button Groups */}
        <CardSection>
          <Button onPress={this.handleSave}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleTextSchedule}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleFireEmployee}>
            Fire Employee
          </Button>
        </CardSection>

        {/* Delete Confirmation Modal */}
        <Confirm
          visible={this.state.showModal}
          onAccept={this.handleFireAccept}
          onDismiss={this.handleFireDismiss}
        >
          Are you sure you want to delete?
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

const mapDispatchToProps = {
  employeeUpdate,
  employeeSave,
  employeeDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
