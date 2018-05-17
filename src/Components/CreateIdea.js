import React, { Component } from 'react';
import '../CreateIdea.css';
import { postData, uploadImage } from '../Actions/PostActions';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import { getAllIdeas } from '../Lib/api-calls';
import { loadIdeasToStore } from '../Actions/actions';

class CreateIdea extends Component {
    constructor(props) {
        super(props)
        this.state = {submitted:false,
                      imageId:""};
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUpdate() {
        getAllIdeas() 
          .then(res => res.json())
          .then(ideas => {
            this.props.loadIdeasToStore(ideas);
          }); 
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
        submission.img_id = await this.state.imageId;
        console.log(submission);
        await postData(submission);
        this.setState({submitted:true});
    }

    handleImageUpload = (event) => {
        const file = event.target.files[0];
        const imageUrl = uploadImage(file);
        this.setState({imageId:imageUrl});
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
                    <label>Visual</label>
                        <input 
                        type="file"
                        name="file" 
                        accept="image/*"
                        onChange={this.handleImageUpload} />
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
            <footer>
                <Footer />
            </footer>
            </div>
        )}
    }
}

let mapDispatchToProps = dispatch => {
    return { loadIdeasToStore: ideas => dispatch(loadIdeasToStore(ideas)) }
  };

let mapPropsToState = (state) => {
    return { allIdeas: state.ideasList}
  };

export default connect(mapPropsToState, mapDispatchToProps)(CreateIdea);