import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    renderItem = () => {
         return this.props.todos.map((item, index) =>{
             return <ListItem key={index} item={item} delete={this.delete} saveEdit={this.saveEdit}/>})
    }

    delete = (e) => {
        this.props.ondelete(e)
    }

    saveEdit = (oldItem, newItem) => {
        this.props.onSaveEdit(oldItem, newItem)
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
                <tbody>
                {this.renderItem()}
                </tbody>
            </table>
        )
    }
}

export default List;
