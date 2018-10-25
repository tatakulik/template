// @flow

import React, { Component } from 'react';
import './Todolist.css';
import Todo from './Todo';

// type PropsType = {list: Array<{knopka: boolean, task: string}>};

// class Todolist extends Component<PropsType> {
//   render() {
//     return (
//       <div className="Todolist">
//         {this.props.list.map(todo2 => <Todo knopka={todo2.knopka} task={todo2.task} />)}
//       </div>
//     );
//   }
// }

type PropsType = {list: Array<{knopka: boolean, task: string}>, onClick: (string) => void};


class Todolist extends Component<PropsType> {
  render() {
    return (
      <div className="Todolist">
        {(this.props.list).map(
          (todo2, i) => (<Todo
            key={i}
            knopka={todo2.knopka}
            task={todo2.task}
            onClick={name => this.props.onClick(name)}
          />
          )
        )}
      </div>
    );
  }
}


export default Todolist;
