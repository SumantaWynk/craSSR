import React, { Component } from 'react';
import './App.css';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log('working');
    }, 5000)
  }
  render() {
    return (
      <Home name="Alligator" />
    );
  }
}

export default App;
