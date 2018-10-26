// @flow

import React, { Component } from 'react';
import './Todo.css';

type PropsType = { task: string};

class Todo extends Component<PropsType> {
  render() {
    return (
      <div className="Todo">
        <input type="checkbox" checked />
        {this.props.task}
      </div>
    );
  }
}

export default Todo;
