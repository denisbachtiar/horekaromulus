import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from './Components/App';
import rootReducer from './Stores/Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));