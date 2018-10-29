// @flow

import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist';
import Addtododo from './Addtododo';

type PropsType = {};

class App extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <Todolist list={[{ checked: true, task: "clean" }, { checked: true, task: "clean2" }]} />
        <Addtododo onClick={() => this.onClick("clean2")} />
      </div>
    );
  }
}

export default App;
