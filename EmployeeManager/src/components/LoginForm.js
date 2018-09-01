import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError = () => {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton = () => ((this.props.loading) ?
    <Spinner size="large" /> :
    <Button onPress={this.onButtonPress}>
      Login
    </Button>);

  render() {
    const { email, password } = this.props;
    return (
      <Card>

        <CardSection>
          <Input
            value={email}
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            value={password}
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
          />    
        </CardSection>

        {this.renderError()}
        
        <CardSection>
          {this.renderButton()}   
        </CardSection>  
      </Card>
  );
  }
}


const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
