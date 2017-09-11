import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

componentDidMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAqfV5LyLmtDpkDvg_G5Vuqw05GJghi5Ss',
    authDomain: 'auth-fee66.firebaseapp.com',
    databaseURL: 'https://auth-fee66.firebaseio.com',
    projectId: 'auth-fee66',
    storageBucket: 'auth-fee66.appspot.com',
    messagingSenderId: '708212966805'
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
