// @flow

import React, { Component } from 'react';
import './Addtodo.css';
import Todo from './Todo';
import Todolist from './Todolist';

type PropsType = { 
  isButton: boolean,
  list: Array<{ checked: boolean, task: string }>, 
  onСlick: {task: string} => void }; 
type StateType = {isButton: boolean};

function isButton(props) {
  return (
    <button styleName="button" onClick={props.onClick}/>
      add
    </button>
  );
}

//   constructor(props) {
//     super(props);
//     this.state = { isButton: true }; 
//   }

class Addtodo extends Component<PropsType> {
  render() {
    return (
      <div className="Addtodo">
        {isButton} 
      </div>
    );
  }  
}

export default Addtodo;
