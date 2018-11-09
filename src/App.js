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
    this.state = { list: [{ checked: false, task: "clean4" }] };
  }

  addtodo(todo: string) {
    const newList = [...this.state.list, { checked: false, task: todo }];
    this.setState({ list: newList });
  }

  clearCheckbox(todo: string) {
    const newList = this.state.list.filter(zuzy => zuzy.task !== todo);
    // zuzy - это любой из элементов/ а to do это то, что нажали
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="App">
        <Todolist list={this.state.list} onClick={navalny => this.clearCheckbox(navalny)} />
        <Addtodo onClick={task => this.addtodo(task)} />
      </div>
    );
  }
}

export default App;
