import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        let todos = []
        this.state = { todos }
    }
  render() {
    return (
      <div className="App">
          <h1>To Do App</h1>
          <Form/>
          <table>
              <thead>
                  <tr>
                      <th>Task</th>
                      <th>Action</th>
                  </tr>
              </thead>
          </table>
      </div>
    );
  }
}

class Form extends Component {
    update(e){
        e.preventDefault()
        this.refs.createInput.value = ''
    }
    render() {
        return (
            <form onSubmit={this.update.bind(this)}>
                <input type="text" placeholder="what do I need to do?" ref="createInput"/>
                <input type="submit"/>
            </form>
        )
    }
}

export default App;
