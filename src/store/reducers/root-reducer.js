import {combineReducers} from 'redux';
import dataReducer from './data/data-reducer';
import appReducer from './app/app-reducer';
import userReducer from './user/user-reducer';
import commentsReducer from './comments/comments-reducer';
import NameSpace from '../name-space';

const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.APP]: appReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.COMMENTS]: commentsReducer,
});

export default rootReducer;
