// @flow

import React, { Component } from 'react';
import './App.css';
// import Button from './Button';
import Todolist from './Todolist';

type PropsType = {};

class App extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <Todolist list={[{ knopka: true, task: "clean2" }, { knopka: false, task: "clean3" }]} />
      </div>
    );
  }
}

export default App;
