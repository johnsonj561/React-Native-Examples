import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { CardSection, Input } from './common';


const pickerOptions = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

class EmployeeCreate extends Component {
  handleNameChange = (value) => {
    const payload = { prop: 'name', value };
    this.props.employeeUpdate(payload);
  }

  handlePhoneChange = (value) => {
    const payload = { prop: 'phone', value };
    this.props.employeeUpdate(payload);
  }

  handleShiftChange = (value) => {
    const payload = { prop: 'shift', value };
    this.props.employeeUpdate(payload);
  }

  handleCreate = () => {
    const { name, phone, shift } = this.props;
    const payload = { name, phone, shift };
    this.props.employeeCreate(payload);
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={this.handleNameChange}
          />
        </CardSection>
  
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={this.handlePhoneChange}
          />
        </CardSection>

        <CardSection style={styles.pickerCardSection}>
          <Text style={styles.pickerLabel}>Select Shift</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.props.shift}
            onValueChange={this.handleShiftChange}
          >
            {pickerOptions.map(option =>
              <Picker.Item label={option} value={option} key={option} />
            )}
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  picker: {
    flex: 1
  },
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 5
  },
  pickerCardSection: {
    flexDirection: 'column',
    height: 200
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

const actionCreators = {
  employeeUpdate,
  employeeCreate
};

export default connect(mapStateToProps, actionCreators)(EmployeeCreate);
