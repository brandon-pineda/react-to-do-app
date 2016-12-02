import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props){
        super(props)
    }

    renderItem = () => {
         return this.props.todos.map((item, index) =>{
             return <ListItem key={index} item={item} delete={this.delete}/>})
    }

    delete = (e) => {
        this.props.ondelete(e)
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
