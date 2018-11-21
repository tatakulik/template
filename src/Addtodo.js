// @flow

import React, { Component } from 'react';
import './Addtodo.css';

type PropsType = {onClick: (box: string) => void}; // можно просто написать string,
// на момент нажатия кнопки add onClick говорит нам что введено в поле ввода/ у нас это строка
type StateType = {box: string}; // описание поля ввода

class Addtodo extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { box: "" };
  }

  boxInput(croco: string) {
    this.setState({ box: croco }); // когда чувак нажимает на кнопку (букву или что то еще)
  // он ее вызывает и обновляет state
  }

  clearBox() {
    this.props.onClick(this.state.box); //
    this.setState({ box: "" });
  }

  // Любое свойство on - это функция, которая будет вызвана по возникновению события
  // Аргументом этой функции будет что-то что описывает событие
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
// event помогает описать событие/ здесь нажатие кнопки/ у event есть ключ target он говорит
// на каком из html элементов произошло событие/ value это стандартная конструкция/ идет
// вместе с event/ value сначала задает начальное значение например "таня", потом нажимаем
// кнопку "1" и в value  который с event подается "таня1" и уже в функцию boxInput идет "таня1"
// и одновременно состояние самого value меняется на "таня1" и так по кругу.
