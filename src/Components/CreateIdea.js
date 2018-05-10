import React, { Component } from 'react';
import '../CreateIdea.css';

class CreateIdea extends Component {
    constructor(props) {
        super(props)
        this.state = {idea:{}};
    }
    handleSubmit = (event) => {
        let submission = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            relationship: event.target.relationship.value
        };
        event.preventDefault();
            this.props.addContact(submission);
            console.log(submission);
            event.target.reset();
    }

    render() {
        return (
            <div className='create-idea'>
                <h1>Add Your Idea</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Post Title</label>
                        <input
                        name="title"
                        placeholder="title"
                        type="text" />
                    
                    <label>Who Are You?</label>
                        <input
                        name="your name"
                        type="text"
                        placeholder="what should we call you?" />
                    
                    <label>Category</label>
                        <select 
                        name="category">
                            <option value="none">None</option>
                            <option value="crypto">Crypto</option>
                            <option value="design">Design</option>
                            <option value="music">Music</option>
                            <option value="food">Food</option>
                        </select>
                    <label>Your Idea</label>
                        <textarea
                        name="idea"
                        placeholder="type your idea here" />                
                    <button type="submit" >
                        Post Idea
                    </button>
                </form>
            </div>
        ) 
    }
}

export default CreateIdea;