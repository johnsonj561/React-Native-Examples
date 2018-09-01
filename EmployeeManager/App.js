import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBStUWuj_RHeH5kS8Rrcyp6MaGd-kT4Wxs',
      authDomain: 'reactnativeemployeemanag-69d98.firebaseapp.com',
      databaseURL: 'https://reactnativeemployeemanag-69d98.firebaseio.com',
      projectId: 'reactnativeemployeemanag-69d98',
      storageBucket: 'reactnativeemployeemanag-69d98.appspot.com',
      messagingSenderId: '250321800557'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
       <Router />
      </Provider>
    );
  }
}

