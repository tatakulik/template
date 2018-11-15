// @flow

import React, { Component } from 'react';
import './Todolist.css';
import Todo from './Todo';

type PropsType = {
  list: Array<{ checked: boolean, task: string }>,
  onClick: (task: string) => void
};


class Todolist extends Component<PropsType> {
  render() {
    return (
      <div className="Todolist">
        {this.props.list.map((krolik, i) => <Todo key={i} task={krolik.task} onClick={todo1 => this.props.onClick(todo1)} />)}
      </div> // до функции map был массив из js объектов, а стал массив из html элементов
    );
  }
}

export default Todolist;
// в функции map - создаем компонет todo и описываем  task и onClick так как они прописаны в Props todo 