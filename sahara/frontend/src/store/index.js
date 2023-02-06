import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
// import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let enhancer;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(applyMiddleware(thunk, logger));


const rootReducer = combineReducers({});

const configureStore = (preloadedState = {}) => {
   return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;