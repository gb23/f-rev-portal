import { createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import businesses from './reducers/businesses';
import filters from './reducers/filters';
import selectedBusiness from './reducers/selectedBusiness';
import subscribers from './reducers/subscribers';
//import sectionFormData from './reducers/sectionFormData';
//import sectionCurrent from './reducers/sectionCurrent';
//import composition from './reducers/composition';
import {  routerMiddleware} from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const middleware = [thunk, routerMiddleware(history)];

const reducers = combineReducers({
    businesses,
    selectedBusiness,
    filters,
    subscribers
   // sectionFormData,
    //sectionCurrent,
    //composition,
   
})
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);

export default store;