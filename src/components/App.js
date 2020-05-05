import AddTodo from "./AddTodo";
import Footer from "./Footer";
import React from "react";
import {Provider} from "react-redux";
import configureStore from '../configureStore';
import VisibleTodoList from "./VisibleTodoList";

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App;

