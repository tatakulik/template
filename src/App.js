// @flow

import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Addtodo from './Addtodo';

type PropsType = {};

class App extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <Todo task="clean" />
        <Addtodo />
      </div>
    );
  }
}

export default App;
