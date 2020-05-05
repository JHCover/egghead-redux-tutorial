import AddTodo from "./AddTodo";
import Footer from "./Footer";
import React from "react";
import VisibleTodoList from "./VisibleTodoList";

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App;

