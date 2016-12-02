import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
    }

    submitted = (e) => {
        e.preventDefault()
        this.props.submitted(this.refs.createInput.value)
        this.refs.createInput.value = ''
    }
    render() {
        return (
            <form onSubmit={this.submitted}>
                <input type="text" placeholder="what do I need to do?" ref="createInput"/>
                <input type="submit"/>
            </form>
        )
    }
}

export default Form;
