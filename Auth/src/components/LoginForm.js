import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };


  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    });
  }


  onLoginFail = () => {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }


  handleSubmit = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }


  renderButton = () => ((this.state.loading) ?
    (<Spinner size="small" />) :
    (<Button onPress={this.handleSubmit}>Login</Button>));

  render() {
    return (
      <Card>

        {/* Email Input */}
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoFocus
          />
        </CardSection>
        
        {/* Password Input */}
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        {/* Error message */}
        <Text style={styles.errorText}>{this.state.error}</Text>

        {/* Submit button */}
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

export default LoginForm;
