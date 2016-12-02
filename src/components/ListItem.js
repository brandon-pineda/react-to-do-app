import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props){
        super(props)
    }

    delete = (e) => {
        this.props.delete(this.props.item)
    }

    render () {
        return (
                <tr>
                    <td>
                        {this.props.item}
                    </td>
                    <td>
                        <button>edit</button>
                        <button onClick={this.delete} >delete</button>
                    </td>
                </tr>
        )
    }
}

export default ListItem;
