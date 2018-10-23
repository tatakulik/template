// @flow

import React, { Component } from 'react';
// import { Button } from 'react-native';
import './Button.css';


type PropsType = {button: value};

class Button extends React.Component {
    render() {
      return (
        <button className="Button" onClick={function() { alert('click'); }}>
          {this.props.value}
        </button>
      );
    }
  }

// class Todo extends Component<PropsType> {
//   render() {
//     return (
//       <div className="Todo">
//         <input
//           type="checkbox"
//           checked={this.props.knopka}
//         />
//         <div className="TodoCheckbox">
//           {this.props.task}
//         </div>
//       </div>
//     );
//   }
// }

export default Button;
