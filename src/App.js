import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log('working');
    }, 5000)
  }
  render() {
    return (
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    );
  }
}

export default App;
