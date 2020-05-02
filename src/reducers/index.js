import {todos} from './todosReducer'
import {visibilityFilter} from "./visibilityFilterReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default rootReducer;