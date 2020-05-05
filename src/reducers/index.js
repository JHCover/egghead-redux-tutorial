import {todos} from './todos'
import {visibilityFilter} from "./visibilityFilter";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default rootReducer;