// @flow

import React, { Component } from 'react';
import './Todolist.css';
import Todo from './Todo';


type PropsType = { list: Array<{checked: boolean, task: string}> };

class Todolist extends Component<PropsType> {
  render() {
    return (
      <div className="Todolist">
        {this.props.list.map((elem, i) => <Todo key={i} task={elem.task} />)}
      </div>
    );
  }
}
// let task = {
//     checked: false,
//     task: "clean"
// }

export default Todolist;
