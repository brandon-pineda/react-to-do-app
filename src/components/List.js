import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props){
        super(props);
    }

    createTodo = (val) => {
        return (
            <tbody>
                <tr>
                    <td>{val}</td>
                    <td>
                        <button>edit</button>
                        <button>delete</button>
                    </td>
                </tr>
            </tbody>
        )
    }

    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    {
                        this.props.todos.map(item => this.createTodo(item))
                    }
            </table>
        )
    }
}

export default List;
