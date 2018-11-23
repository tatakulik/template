// @flow

import React, { Component } from 'react';
import './Addtodo.css';
import Todolist from './Todolist';

type PropsType = { onClick: () => void, list: Array<{checked: boolean, task: string}>,   };
type StateType = { box: string };

class Addtodo extends Component<PropsType> {
    constructor(props) {
        super(props);
        this.state={ box: "" }
        this.updateState=this.updateState.bind(this);
    };
    updateState() {
        this.setState({box: string})
    };
    taskPlus(box: string) {
        const Plus=[...]
    }


};




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
