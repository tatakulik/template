// @flow

import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist';
import Addtodo from './Addtodo';

type PropsType = {};
type StateType = {list: Array<{ checked: boolean, task: string }>};

class App extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { list: [{ checked: true, task: "clean4" }] };
  }

  addtodo(todo: string) {
    const newList = [...this.state.list, { checked: true, task: todo }];
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="App">
        <Todolist list={this.state.list} />
        <Addtodo onClick={task => this.addtodo(task)} />
      </div>
    );
  }
}

export default App;
