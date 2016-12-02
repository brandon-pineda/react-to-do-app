import React, { Component } from 'react';

class ListItem extends Component {
    constructor(){
        super()
        this.state = {isEditting: false}
    }

    renderItem = () => {
        if (this.state.isEditting) {
            return (
                <td>
                    <form>
                        <input type="text"
                            defaultValue={this.props.item}
                            onSubmit={this.save}
                            ref="editInput"/>
                    </form>
                </td>
            )
        } else {
            return (
                <td>
                    {this.props.item}
                </td>
            )
        }
    }

    renderButtons = () => {
        if (this.state.isEditting) {
            return (
                <td>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </td>
            )
        } else {
            return (
                <td>
                    <button onClick={this.edit}>Edit</button>
                    <button onClick={this.delete}>Delete</button>
                </td>
            )
        }
    }

    render () {
        return (
                <tr>
                    {this.renderItem()}
                    {this.renderButtons()}
                </tr>
        )
    }

    delete = (e) => {
        this.props.delete(this.props.item)
    }

    edit = (e) => {
        this.setState({
            isEditting: !this.state.isEditting
        })
    }

    cancel = (e) => {
        this.setState({
            isEditting: false
        })
    }

    save = (e) => {
        e.preventDefault()
        this.props.saveEdit(this.props.item, this.refs.editInput.value)
        this.setState({
            isEditting: false
        })
    }
}

export default ListItem;
