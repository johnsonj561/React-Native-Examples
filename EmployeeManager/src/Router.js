import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
  <Router>

    <Scene key="root" hideNavBar>

      {/* Auth Flow */}
      <Scene key="auth">
        <Scene initial key="login" component={LoginForm} title="Please Login" />
      </Scene>

      {/* Main Flow for Logged In Users */}
      <Scene key="main">
        <Scene
          initial
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Scene>

    </Scene>

  </Router>

);

export default RouterComponent;
