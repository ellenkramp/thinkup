import React, { Component } from 'react';
import '../CreateIdea.css';
import { postData } from '../Actions/PostActions';
import { Redirect } from 'react-router-dom';
// import AllIdeasScreen from './AllIdeasScreen';
import Header from './Header';

class CreateIdea extends Component {
    constructor(props) {
        super(props)
        this.state = {submitted:false};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        let submission = {};
        event.target.title!==undefined ? submission.title = event.target.title.value :
            submission.title="none";
        event.target.category!==undefined ? submission.category = event.target.category.value :
            submission.category = "none";
        event.target.content!==undefined ? submission.content = event.target.content.value :
            submission.content = "none";
        event.target.tag1!==undefined ? submission.tag1 = event.target.tag1.value :
            submission.tag1 = "none";
        event.target.username!==undefined ? submission.username = event.target.username.value :
            submission.username = "none";

        console.log(submission);
        await postData(submission);
        this.setState({submitted:true});
    }

    render() { 
            if (this.state.submitted===true){
                return (
                    <Redirect to="/ideas"/>
                )}
            else {
                return (
        <div>
            <Header />
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
                    <label>User Name</label>
                        <div>
                        <input
                        name="username"
                        placeholder="alias"
                        type="text" />
                        </div>
                    </div>
                    
                        <div className="ci">
                        <label>Category</label>
                        <div className="select">
                        <select 
                        name="category">
                            <option value="film">Film</option>
                            <option value="gaming">Gaming</option>
                            <option value="art">Art</option>
                            <option value="music">Music</option>
                        </select>
                        </div>
                        </div>
                    

                    <div className="ci">
                    <label>Your Idea</label>
                    <div>
                        <textarea
                        name="content"
                        type="text"
                        placeholder="type your idea here" />  
                    </div>
                    </div>

                    <div className="ci">          
                    <button type="submit">
                        Post Idea
                    </button>
                    </div>
                </form>
            </div>
            </div>
        )}
    }
}

export default CreateIdea;