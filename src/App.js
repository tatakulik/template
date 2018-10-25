// @flow

import React, { Component } from 'react';
import './App.css';
// import Button from './Button';
import Todolist from './Todolist';
import Addtodo from './Addtodo';

type PropsType = {};
type StateType = {todos: Array<{knopka: boolean, task: string}>};

// const App = {
// props: {

// }


// state: {

// }

//   addTodo: function() {

//   }

//   render: function() {

//   }
// }

class App extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { todos: [] };
  }

  removeTodo(taskName: string) {
    const todosValue = this.state.todos.filter(todo => (taskName !== todo.task));
    this.setState({ todos: todosValue });
  }

  addTodo(todoname: string) {
    const todosValue = [...this.state.todos];
    todosValue.push({ knopka: true, task: todoname });
    this.setState({ todos: todosValue });
  }

  render() {
    return (
      <div className="Button">
        <Todolist list={this.state.todos} onClick={name => this.removeTodo(name)} />
        <Addtodo onAdd={todoname => this.addTodo(todoname)} />
      </div>
    );
  }
}

export default App;
