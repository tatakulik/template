// @flow

import React, { Component } from 'react';
import './Todolist.css';
import Todo from './Todo';

type PropsType = {list: Array<{knopka: boolean, task: string}>};

class Todolist extends Component<PropsType> {
  render() {
    return (
      <div className="Todolist">
        {this.props.list.map(todo2 => <Todo knopka={todo2.knopka} task={todo2.task} />)}
      </div>
    );
  }
}


export default Todolist;
