import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqfV5LyLmtDpkDvg_G5Vuqw05GJghi5Ss',
      authDomain: 'auth-fee66.firebaseapp.com',
      databaseURL: 'https://auth-fee66.firebaseio.com',
      projectId: 'auth-fee66',
      storageBucket: 'auth-fee66.appspot.com',
      messagingSenderId: '708212966805'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
