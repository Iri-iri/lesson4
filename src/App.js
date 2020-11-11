import firebase from 'firebase';
import React, { Component } from 'react';
import './App.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCgyX4v6FEpj5lI-WQ84sbu1jryP57gjUA',
  authDomain: 'react-auth-c5d31.firebaseapp.com',
  databaseURL: 'https://react-auth-c5d31.firebaseio.com',
  projectId: 'react-auth-c5d31',
  storageBucket: 'react-auth-c5d31.appspot.com',
  messagingSenderId: '893658284865',
  appId: '1:893658284865:web:2bc2ca3d9c992094dad7c0',
  measurementId: 'G-NW73LXPNNS',
};

class App extends Component {
    state = {
    email: '',
    password: '',
    user: null,
  };

  componentDidMount = () => {
    firebase.initializeApp(firebaseConfig); //настроили приватный канал связи клиента и сервера
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.password.length === 5 &&
      this.state.password.length === 6 &&
      this.state.email !== ''
    ) {
      // TODO login()
      this.login();
    }
  };


  login = async() => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
    
    this.setState({ user: response.user, email: '', password: '' });
  }

  render() {
    return (
      <div className='App'>
        <input
          type='text'
          placeholder='email'
          onChange={(event) => this.setState({ email: event.target.value })}
          value={this.state.email}
        />
        <input
          type='text'
          placeholder='password'
          onChange={(event) => this.setState({ password: event.target.value })}
          value={this.state.password}
        />
        <button onClick={this.login}>Sign in</button>


        { this.state.user && (
          <div>{ `Hello ${this.state.user.uid}` }</div>
        )}
      </div>
    );
  }
}

export default App;
