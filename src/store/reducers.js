import {combineReducers} from 'redux'
import {dictReducer} from './dictStore'
import {userReducer} from './userStore'

const reducers = combineReducers({
    dictReducer,
    userReducer,
});
export default reducers;
