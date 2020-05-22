import { combineReducers } from 'redux';
import list from './list';
import exercise from './exercise';
import modal from './modal';

const rootReducer = combineReducers({
    list,
    exercise,
    modal
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;