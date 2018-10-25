// @flow

import React, { Component } from 'react';
import './Todo.css';


type PropsType = {knopka: boolean, task: string, onClick: (string) => void};

class Todo extends Component<PropsType> {
  render() {
    return (
      <div className="Todo">
        <input
          type="checkbox"
          checked={this.props.knopka}
          readOnly
          onChange={() => this.props.onClick(this.props.task)}
        />
        <div className="TodoCheckbox">
          {this.props.task}
        </div>
      </div>
    );
  }
}

export default Todo;
