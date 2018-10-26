// @flow

import React, { Component } from 'react';
import './Todolist.css';
import Todo from './Todo';

type PropsType = { list: Array<{ checked: boolean, task: string }>, onСlick: {task: string} => void };

class Todolist extends Component<PropsType> {
  render() {
    return (
      <div className="Todolist">
        {this.props.list.map((todo, i) => <Todo key={i} task={todo.task} />)}
      </div>
    );
  }
}

export default Todolist;
