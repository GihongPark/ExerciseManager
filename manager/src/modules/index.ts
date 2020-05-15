import { combineReducers } from 'redux';
import list from './list';
// import kind from './kind';

const rootReducer = combineReducers({
    list,
    // kind
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;