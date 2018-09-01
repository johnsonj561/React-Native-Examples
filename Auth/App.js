import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import { config } from './firebase';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderLogoutView = () => (
    <View style={styles.logoutView}>
      <Button onPress={() => firebase.auth().signOut()}>
        Log Out
      </Button>
    </View>
  );


  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return this.renderLogoutView();
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
  },
  logoutView: {
    marginTop: 50,
    height: 45
  },
  spinnerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

export default App;
