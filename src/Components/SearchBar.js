import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../Actions/actions';


function mapStateToProps({ ideasList, filteredIdeas }) {
  return {
    value: ideasList.value,
    filteredIdeas
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

class SearchBar extends Component {
  render() {
    const {search, value} = this.props;

    return (
        <div className="ss-bar">
            <input
            type="search"
            className="form-control"
            placeholder = "Search keywords"
            onChange={(e) => search(e.target.value)}
            value={value} />

            {this.props.filteredIdeas.length
                ? <div>
                    {
                        this.props.filteredIdeas.map(idea => {
                            return (
                            <div key={idea.id} className="searched-ideas">
                                <h1>{idea.title}</h1>
                                <p>{Date(idea.time)}</p>
                                <img src={idea.img_id} alt="img" className="post-img" />
                                <p>{idea.content}</p>
                            </div>
                            )
                        }
                    )}
                </div>
                : null   
            }

        </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);