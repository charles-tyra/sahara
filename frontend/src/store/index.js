import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import sessionReducer from './session';
import userReducer from './usersReducer'
import itemReducer from './items';

let enhancer;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(applyMiddleware(thunk, logger));


const rootReducer = combineReducers({
   session: sessionReducer,
   user: userReducer,
   item: itemReducer
});

const configureStore = (preloadedState = {}) => {
   return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;