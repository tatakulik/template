// @flow

import React, { Component } from 'react';
import './Addtododo.css';
// import Todo from './Todo';
// import Todolist from './Todolist';

type PropsType = {
//   isButton: boolean,
//   list: Array<{ checked: boolean, task: string }>
  onClick: (task: string) => void,
};
// type StateType = {isButton: boolean};

class Addtododo extends Component<PropsType> {
// constructor(props) {
//   super(props);
//   this.state = {this.isButton: true};
// }

  render() {
    return (
      <div className="Addtododo">
        <button type="submit" onClick={() => this.props.onClick("clean2")}>
          add
        </button>
      </div>
    );
  }
}

export default Addtododo;
