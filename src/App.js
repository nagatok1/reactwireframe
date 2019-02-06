import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMethod from './Header1.js';
import TitleMethod from './Title1.js';
import TableMethod from './Table1.js';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMethod/>
        <TitleMethod/>
        <TableMethod/>
      </div>
    );
  }
}

export default App;
