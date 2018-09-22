import { createStore } from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());
export default store;
