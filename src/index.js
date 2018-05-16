import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


let initialState = {
    ideasList: [],
    value: '',
    filteredIdeas: []
}


let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_IDEAS_TO_STORE": {
            return {
                ...state, ideasList: action.payload.ideas
            }
        }

        case "SEARCH": {
            const { payload } = action;
            const filteredIdeas = state.ideasList.filter((val) => val.content.toLowerCase().includes(payload.toLowerCase()))
            if (action.payload === "") {
                return {
                   ...state, filteredIdeas: [] 
                }}
            else {
                return {
                    ...state, filteredIdeas
                }
            }
        }

        default: return state;
    }
}

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


let UI = 
    <Provider store={store}> 
        <App />
    </Provider>


ReactDOM.render(UI, document.getElementById('root'));
