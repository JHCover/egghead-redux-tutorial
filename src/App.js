import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import React from "react";
import {Provider} from "react-redux";
import store from './store';
import VisibleTodoList from "./components/VisibleTodoList";




export const TodoApp = () => (
    <Provider store={store}>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </Provider>
);

export default TodoApp;
