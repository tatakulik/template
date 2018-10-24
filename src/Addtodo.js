// @flow

import React, { Component } from 'react';
import './Addtodo.css';

type PropsType = {onAdd: (string) => void};
type StateType = {todoname: string};


class Addtodo extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { todoname: "" };
  }

  setText(text: string) {
    this.setState({ todoname: text });
  }

  add() {
    this.props.onAdd(this.state.todoname);
    this.setState({ todoname: "" });
  }

  render() {
    return (
      <div className="Button">
        <input value={this.state.todoname} onChange={event => this.setText(event.target.value)} />
        <button className="Button2" type="button" onClick={() => this.add()}>
          add
        </button>
      </div>
    );
  }
}

export default Addtodo;
