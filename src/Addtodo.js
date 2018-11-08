// @flow

import React, { Component } from 'react';
import './Addtodo.css';
// import Todo from './Todo';
// import Todolist from './Todolist';

type PropsType = {onClick: (task: string) => void};

class Addtodo extends Component<PropsType> {
  render() {
    return (
      <button type="button" className="button" onClick={() => this.props.onClick("clean2")}>
        add
      </button>
    );
  }
}

export default Addtodo;
