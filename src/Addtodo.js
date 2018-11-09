// @flow

import React, { Component } from 'react';
import './Addtodo.css';
// import Todo from './Todo';
// import Todolist from './Todolist';

type PropsType = {onClick: (task: string) => void};
type StateType = {box: string};

class Addtodo extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { box: "" };
  }

  boxInput(box: string) {
    this.setState({ box: box });
  }

  clearBox() {
    this.props.onClick(this.state.box);
    this.setState({ box: "" });
  }

  render() {
    return (
      <div>
        <input type="text" className="text" value={this.state.box} onChange={event => this.boxInput(event.target.value)} />
        <button type="button" className="button" onClick={() => this.clearBox()}>
           add
        </button>
      </div>
    );
  }
}

export default Addtodo;
