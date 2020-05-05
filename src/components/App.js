import AddTodo from "./AddTodo";
import Footer from "./Footer";
import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import { useParams } from "react-router-dom";


const App = () => {

    let {filter} = useParams();

    return (
        <div>
            <AddTodo/>
            <VisibleTodoList
                filter={filter || 'all'}
            />
            <Footer/>
        </div>
    );
}

export default App;

