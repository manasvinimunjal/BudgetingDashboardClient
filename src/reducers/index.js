import {combineReducers} from 'redux';
import  categoryReducer from './categoryReducer';
import  errorReducer from './errorReducer';
import  authReducer from './authReducer';

export default combineReducers({
    category: categoryReducer,
    error:errorReducer,
    auth:authReducer
})