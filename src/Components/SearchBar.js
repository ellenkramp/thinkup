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
        <div>
            <input
            className="form-control"
            placeholder = "Search By Cateogries"
            onChange={(e) => search(e.target.value)}
            value={value} />

            {this.props.filteredIdeas.length
                ? (<div>
                    {
                        this.props.filteredIdeas.map(idea => {
                            return (
                            <div>
                                {idea.title}
                                {idea.content}
                            </div>
                            )
                        }
                    )}
                </div>)
                : null   
            }

        </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);