// @flow

import React, { Component } from 'react';
import './Addtodo.css';

type PropsType = { onClick: () => void };

class Addtodo extends Component<PropsType> {
  render() {
    return (
      <div className="Addtodo">
        <button type="button" onClick={this.props.onClick}>add</button>
      </div>
    );
  }
}

export default Addtodo;
