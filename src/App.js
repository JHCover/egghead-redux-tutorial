import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import React from "react";
import {Provider, connect} from "react-redux";
import store from './store';
import TodoList from "./components/TodoList";




const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
    };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export const TodoApp = () => (
    <Provider store={store}>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </Provider>
);

export default TodoApp;
