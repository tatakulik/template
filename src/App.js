// @flow

import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

type PropsType = {};

class App extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <Todo knopka task="clean" />
      </div>
    );
  }
}

export default App;
