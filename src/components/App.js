import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import '../App.css';

class App extends Component {
    constructor(){
        super()
        this.state = { todos: [] }
    }

    onFormSubmit = (val) => {
        this.state.todos.push(val)
        this.setState({
            todos: this.state.todos
        })
    }

    onItemDelete = (deleted) => {
        let currTodos = this.state.todos.filter((item) => deleted !== item)
        this.setState({
            todos: currTodos
        })
    }

    onSaveEdit = (oldItem, newItem) => {
        let currTodos = this.state.todos
        currTodos[(this.state.todos).findIndex((item) => item === oldItem)] = newItem
        this.setState({
            todos: currTodos
        })
    }

  render() {
    return (
      <div className="App">
          <h1>To Do App</h1>
          <Form
              todos={this.state.todos}
              submitted={this.onFormSubmit}/>
          <List
              todos={this.state.todos}
              ondelete={this.onItemDelete}
              onSaveEdit={this.onSaveEdit}/>
      </div>
    )
  }
}

export default App;
