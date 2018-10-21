// @flow

import React, { Component } from 'react';
import './Todo.css';

type PropsType = {knopka: boolean, task: string};

class Todo extends Component<PropsType> {
  render() {
    return (
      <div className="Todo">
        {this.props.knopka}
        {this.props.task}
      </div>
    );
  }
}

export default Todo;
