import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBbFDhe6NKmd8pY_v2pTaxAs14okRK24l0',
      authDomain: 'auth-3f979.firebaseapp.com',
      databaseURL: 'https://auth-3f979.firebaseio.com',
      storageBucket: 'auth-3f979.appspot.com',
      messagingSenderId: '471208617348'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
