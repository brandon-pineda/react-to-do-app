import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state = {error: null}
    }

    submitted = (e) => {
        e.preventDefault()
        let input = this.refs.createInput.value
        let validation = this.validateInput(input)

        if (validation) {
            this.setState({ error: validation })
            return
        }

        this.setState({ error: null });
        this.props.submitted(input)
        this.refs.createInput.value = ''
    }
    render() {
        return (
            <form onSubmit={this.submitted}>
                <input type="text" placeholder="what do I need to do?" ref="createInput"/>
                <input type="submit"/>
                {this.renderError()}
            </form>
        )
    }

    renderError() {
        if (!this.state.error){
            return null;
        }
        return (
            <div style={{ color: 'red' }}>
                {this.state.error}
            </div>
        )
    }

    validateInput = (input) => {
        if (!input) {
            return 'Cannot enter a blank task!'
        } else if (this.props.todos.includes(input)) {
            return 'Task already exists!'
        } else {
            return null;
        }
    }
}

export default Form;
