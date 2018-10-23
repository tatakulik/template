// @flow

import React, { Component } from 'react';
import './App.css';
// import Button from './Button';
import Todolist from './Todolist';

type PropsType = {};
type StateType = Array<{knopka: boolean, task: string}>;

class App extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = [{ knopka: true, task: "clean3" }];
  }

  render() {
    return (
      <div className="App">
        <Todolist list={this.state} />
      </div>
    );
  }
}

export default App;
