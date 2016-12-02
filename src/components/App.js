import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import '../App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = { todos: [] }
    }

    onChildSubmit = (val) => {
        this.state.todos.push(val)
        this.setState({
            todos: this.state.todos
        })
    }

  render() {
    return (
      <div className="App">
          <h1>To Do App</h1>
          <Form
              todos={this.state.todos} submitted={this.onChildSubmit}/>
          <List
              todos={this.state.todos}
              />
      </div>
    )
  }
}

export default App;
