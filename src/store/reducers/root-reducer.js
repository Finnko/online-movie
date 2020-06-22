import {combineReducers} from 'redux';
import dataReducer from './data/data-reducer';
import NameSpace from '../name-space';

const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
});

export default rootReducer;
