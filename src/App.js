// @flow

import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist';
import Addtodo from './Addtodo';

type PropsType = {};
type StateType = {list: Array<{ checked: boolean, task: string }>};

class App extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { list: [{ checked: false, task: "clean4" }] };
  } // елемент массива - это объект, поэтому снова {}

  addtodo(kuku: string) {
    const newList = [...this.state.list, { checked: false, task: kuku }];
    this.setState({ list: newList }); // меняем состояние в связи с добавлением нового элемента
  }
  // const newList = ... это возьми старый массив и добавь новый элемент,
  // это возьми все элементы массива и добавь новый элемент и получим новый массив
  // это вместо функции push, просто push добавляет в старый массив новый элемент
  // а это созд новый массив

  clearCheckbox(todo: string) {
    const newList = this.state.list.filter(zuzy => zuzy.task !== todo);
    // filter - фильтруем массив list, сравниваем task с todo/ мы нажимаем на задачу/ ее значение
    // передается как аргумент функции clearCheckbox (здесь todo) фильтр перебирает все значения
    // task и сравнивает с todo/ как только находит - удаляет и создает новый list - newList
    // zuzy - это любой из элементов/ а to do это то, что нажали
    this.setState({ list: newList }); // меняем состояние на новый list без удаленного элемента
  }

  render() {
    return (
      <div className="App">
        <Todolist list={this.state.list} onClick={navalny => this.clearCheckbox(navalny)} />
        <Addtodo onClick={task => this.addtodo(task)} />
      </div>
    );
  }
}
export default App;
// Todolist здесь шаблон и я уже наполняю его пользовательскими функциями/ есть базовая модель киа 
// я прошу включить обогрев руля и прочее/ здесь по аналогии