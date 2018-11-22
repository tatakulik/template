// @flow

import React, { Component } from 'react';
import './Todolist.css';


type PropsType = { list: array<{  }> };

class Todolist extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <Todo task="clean" />
        <Addtodo />
      </div>
    );
  }
}

export default Todolist;
