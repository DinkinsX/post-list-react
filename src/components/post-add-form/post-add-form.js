import React from 'react';

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.onValueChange = (event) => {
            this.setState({text: event.target.value});
        };
        
        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.onAdd(this.state.text);
            this.setState({text: ''});
        }
    }

    render () {
        return (
        <form 
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
            <input type="text"
            placeholder="О чём вы думаете?"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            value={this.state.text}/>
            <button 
            type="submit" 
            className="btn btn-outline-secondary" 
            >Добавить
            </button>
        </form>
        )
    }
} 
    


