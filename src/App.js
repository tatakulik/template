// @flow

import React, { Component } from 'react';
import './App.css';
// import Button from './Button';
import Todolist from './Todolist';

type PropsType = {};
type StateType = {todos: Array<{knopka: boolean, task: string}>};

class App extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { todos: [{ knopka: true, task: "clean3" }] };
  }

  addTodo() {
    const todos = [...this.state.todos];
    todos.push({ knopka: true, task: "clean4" });
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <Todolist list={this.state.todos} />
        <button type="button" onClick={() => this.addTodo()}>
          add
        </button>
      </div>
    );
  }
}

export default App;
