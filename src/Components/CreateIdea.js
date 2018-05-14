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
                    <div className="ci">
                    <label>Post Title</label>
                        <div>
                        <input
                        name="title"
                        placeholder="title"
                        type="text" />
                        </div>
                    </div>

                    <div className="ci">
                    <label>Who Are You?</label>
                        <div>
                        <input
                        name="your name"
                        type="text"
                        placeholder="what should we call you?" />
                        </div>
                    </div>
                    
                        <div className="ci">
                        <label>Category</label>
                        <div className="select">
                        <select 
                        name="category">
                            <option value="none">None</option>
                            <option value="crypto">Gaming</option>
                            <option value="design">Design</option>
                            <option value="music">Music</option>
                            <option value="food">Film</option>
                        </select>
                        </div>
                        </div>
                    

                    <div className="ci">
                    <label>Your Idea</label>
                    <div>
                        <textarea
                        name="idea"
                        placeholder="type your idea here" />  
                    </div>
                    </div>

                    <div className="ci">              
                    <button type="submit" >
                        Post Idea
                    </button>
                    </div>
                </form>
            </div>
        ) 
    }
}

export default CreateIdea;