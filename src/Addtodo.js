// @flow

import React, { Component } from 'react';
import './Addtodo.css';

type PropsType = { onClick: () => void };
// type StateType = { box: string };

class Addtodo extends Component<PropsType> {
  render() {
    return (
      <div className="Addtodo">
        <button type="button" onClick={this.props.onClick}>add</button>
        <input type="text" />
      </div>
    );
  }
}

export default Addtodo;
