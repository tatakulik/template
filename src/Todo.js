// @flow

import React, { Component } from 'react';
import './Todo.css';

type PropsType = {
    task: string,
    onClick: (task: string) => void,
};

class Todo extends Component<PropsType> { // у всех input есть св-во onchange Button - `onclick
  render() {
    return (
      <div className="Todo">
        <input type="checkbox" checked={false} onChange={() => this.props.onClick(this.props.task)} />
        {this.props.task}
      </div>
    );
  }
}

export default Todo;

// this - это компонет, в данном случае Todo у него есть св-ва props и state
