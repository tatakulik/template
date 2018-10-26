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

class Todolist extends Component<PropsType> {
  constructor(props) {
    super(props);
    this.state = { isButton: true }; 
  }

  render() {
    return (
      <div className="Addtodo">
        <button styleName="button" onClick={this.handleOnClick}>
       add 
      </button>  
      </div>
    );
  }
}

export default Addtodo;
