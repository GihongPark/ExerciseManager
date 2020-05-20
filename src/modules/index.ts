import { combineReducers } from 'redux';
import list from './list';
import exercise from './exercise';

const rootReducer = combineReducers({
    list,
    exercise
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;